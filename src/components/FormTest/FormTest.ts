import Block from '../Block/Block.ts'



class FormTest extends Block {
  protected template = `
    <form>
      {{{ Input type="text" placeholder="Логин" ref="login" validate="напиши регулярку и как мы ее будем ловить в хелпере и что делать в компоненте" }}}
      {{{ Input type="password" placeholder="Пароль" ref="password" }}}
      {{{ Button label="Авторизация" }}}
    </form>
  `;

  /*
    телефон
    const phoneRu = /^(?:\+7|8)\d{10}$/;
    const nameRe = /^[А-ЯЁA-Z][а-яёa-z]*(?:[-\s][А-ЯЁA-Z][а-яёa-z]*)*$/;
    const emailRe = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ пароль
  */

  componentDidMount() {
    setTimeout(() => {
      // this.setProps({ buttonName: "Клик через 3 секунды!" }) // изменения пропсов включает перерендер, а перерендер вызывает componentDidMount
      console.log("Смонтировано 3 секунды назад");
    }, 3000); 
  }

  protected events = {
    submit: (event : Event) => {
      event.preventDefault();
      console.log(this.refs.login)
      const input = this.refs.login.querySelector('#login') as HTMLInputElement;
      const error = this.refs.login.querySelector('.login-error') as HTMLElement;

      console.log(input.value);
    },
  };
  
}

export default FormTest;
