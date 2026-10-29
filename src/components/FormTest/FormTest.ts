import Form from '../Form/Form.ts';

class FormTest extends Form {
  protected template = `
    <form>
      {{{ Input name="login" type="text" placeholder="Логин" ref="login" validate="email" }}}
      {{{ Input name="password" type="password" placeholder="Пароль" validate="password" ref="password" }}}
      {{{ Button class="form__submit-button" label="Авторизация" }}}
    </form>
  `;

  private mountTimeout?: number;

  componentDidMount() {
    this.mountTimeout = window.setTimeout(() => {
      console.log('Смонтировано 3 секунды назад');
    }, 3000);
  }

  componentWillUnmount() {
    if (this.mountTimeout) {
      clearTimeout(this.mountTimeout);
      this.mountTimeout = undefined;
    }
  }

  protected events = {
    submit: (event : Event) => {
      event.preventDefault();

      if (this.validateAll()) {
        console.log(
          this.aggValues()
        );
      }
    },
  };
  
}

export default FormTest;
