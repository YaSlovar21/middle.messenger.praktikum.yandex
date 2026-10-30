import Form from "../Form/Form";


class FormLogin extends Form {
  protected template = `
    <form class="form" action="/" method="post" novalidate>
    <h2 class="form__title">Вход</h2>
    {{{  Input
        class="form__field"
        title="Логин"
        ref="login"
        name="login"
        validate="login"
        placeholder="ivanivanov"
        required=true
    }}}

    {{{  Input
        title="Пароль"
        name="password"
        ref="password"
        type="password"
        placeholder="••••••••••••"
        validate="password"
        required=true
    }}}

    <button class="form__submit-button" type="submit">Войти</button>
  </form>
  `;

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

export default FormLogin;
