import Handlebars from 'handlebars';
type EventListType = Partial<Record<keyof HTMLElementEventMap, (e: Event) => void>>;

export default abstract class Block<Props extends object> {

  protected abstract template: string;
  protected props = {} as Props;
  protected events: EventListType = {}; 
  protected refs: Record<string, Element> = {};

  private domElement: Element | null = null;

  constructor(props: Props = {} as Props) {
    this.props = props;
  }

  private compile(): Element | null {
    const html = Handlebars.compile(this.template)(this.props);
    const templateElement = document.createElement("template");

    templateElement.innerHTML = html;

    const fragment = templateElement.content;
    
    const initObj: Record<string, Element> = {};
    
    this.refs = Array.from(fragment.querySelectorAll("[ref]")).reduce(
          (list, element) => {
            const key = element.getAttribute("ref");
            if (key === null) {
              return list;
            }
            list[key] = element;
            element.removeAttribute("ref");
            return list;
          },
          initObj
    );

    return templateElement.content.firstElementChild;
  }

  public element(): Element | null {
    if (!this.domElement) {
      this.render();
    }

    return this.domElement;
  }

  public setProps(props: Partial<Props>) {
    this.props = { ...this.props, ...props };
    this.render();
  }

  protected render() {
    this.unmountComponent();
    const fragment = this.compile();

    if (this.domElement && fragment) {
      this.domElement.replaceWith(fragment);
    }

    this.domElement = fragment;
    this.mountComponent();
  }

  private attachListeners() {
    Object.keys(this.events).forEach((eventName) => {
      const key = eventName as keyof typeof this.events; 
      const eventCallback = this.events[key];

      if (typeof eventCallback == "function" && this.domElement) {
        this.domElement.addEventListener(eventName, eventCallback);
      }
    })
  } 

  private removeListeners() {
    Object.keys(this.events).forEach((eventName) => {
      const key = eventName as keyof typeof this.events; 
      const eventCallback = this.events[key];
      if (typeof eventCallback === "function" && this.domElement) {
        this.domElement.removeEventListener(eventName, eventCallback);
      }
    })
  } 

  protected componentDidMount() {}

  private mountComponent() {
    this.attachListeners();
    this.componentDidMount();
  }

  protected componentWillUnmount() {}

  private unmountComponent() {
    if (this.domElement) {
      this.componentWillUnmount();
      this.removeListeners();
    }
  }

}
