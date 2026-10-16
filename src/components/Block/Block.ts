import Handlebars from 'handlebars';
type EventListType = Partial<Record<keyof HTMLElementEventMap, (e: Event) => void>>;

export interface BlockOwnProps {
  __children?: Array<{
    component: Block<object>;
    embed(node: DocumentFragment): void;
  }>;
  __refs?: Record<string, Element>;
}

export default abstract class Block<Props extends BlockOwnProps = BlockOwnProps> {

  protected abstract template: string;
  protected props = {} as Props;
  protected children: Block<object>[] = [];

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
    
    if (this.props.__children) { // СОСРЕДОТОЧИМСЯ ВОТ ЗДЕСЬ у LoginPage есть 2 чилдрена, но при компиляции мы
      console.log(this.props.__children); // чилдрены есть 
      this.children = this.props.__children.map((child) => child.component);

      this.props.__children.forEach((child) => {
        const div = document.createElement('div');
        div.appendChild(fragment.cloneNode(true)); 
        console.log(child, div.innerHTML)
        child.embed(fragment); // после компиляции мы прокидываем в child.embed(темплэйту родителя) хотя компонент должен ембедится сам относительно себя
      });
    }
    const defaultRefs = this.props?.__refs ?? {};
    
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
          defaultRefs
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
    this.props = { ...this.props, ...props, __children: [], __refs: {} } as Props;
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
    console.log(this);
  }

  protected componentWillUnmount() {}

  private unmountComponent() {
    if (this.domElement) {
      this.children.reverse().forEach(child => child.unmountComponent());

      this.componentWillUnmount();
      this.removeListeners();
    }
  }

}
