import Form from '../Form/Form.ts';

class FormRegistration extends Form {
  protected template = `
    <form class="form" action="/" method="post" novalidate>
      <h2 class="form__title">Регистрация</h2>
      {{{ Input
          class="form__field"
        title="Почта"
        name="email"
        type="email"
        placeholder="pochta@yandex.ru"
        ref="email"
        validate="email"
        required=true
      }}}
      
      {{{ Input
          class="form__field"
          title="Логин"
          name="login"
          type="text"
          placeholder="ivanivanov"
          ref="login"
          validate="login"
          required=true
      }}}
      
      {{{ Input
          class="form__field"
          title="Имя"
          name="first_name"
          type="text"
          placeholder="Иван"
          ref="first_name"
          validate="name"
          required=true
      }}}
      
      {{{ Input
          class="form__field"
          title="Фамилия"
          name="second_name"
          type="text"
          placeholder="Иванов"
          ref="second_name"
          validate="name"
          required=true
      }}}
      
      {{{ Input
          class="form__field"
          title="Телефон"
          name="phone"
          type="tel"
          placeholder="+7 (909) 967 30 30"
          ref="phone"
          validate="phoneRu"
          required=true
      }}}
      
      {{{ Input
          class="form__field"
          title="Пароль"
          name="password"
          type="password"
          placeholder="••••••••••••"
          ref="password"
          validate="password"
          required=true
      }}}

      {{{ Button class="form__submit-button" label="Авторизация" }}}
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

export default FormRegistration;
