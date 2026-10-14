//C:\Users\User\Documents\tm1_work\middle.messenger.praktikum.yandex\src\components\Block\Block.ts 

abstract class Block<Props extends object> {

  protected abstract template: string;
  protected props = {} as Props;

  private domElement: Element | null = null;

  constructor(props: Props = {} as Props) {
    this.props = props;
  }

  private compile(): Element | null {
    const html = Handlebars.compile(this.template)(this.props);
    const templateElement = document.createElement("template");
  
    templateElement.innerHTML = html;
  
    return templateElement.content.firstElementChild;
  }

  protected render() {
    const fragment = this.compile();
  
    /** Если элемент уже существовал, обновляем его по имеющейся ссылке */
    if (this.domElement && fragment) {
      this.domElement.replaceWith(fragment);
    }
  
    this.domElement = fragment;
  }

  public element(): Element | null {
    if (!this.domElement) {
      this.render();
    }
  
    return this.domElement;
  }

};

export default Block;
