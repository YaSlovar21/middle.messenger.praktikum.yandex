import Form from "../Form/Form";

class FormSettings extends Form {
  static readonly componentName = "FormSettings";

  protected template = `
    <form class="form form_page_profile" action="/" method="post" novalidate>
        <h2 class="form__title">Иван</h2>

        {{{ Input
            title="Почта"
            class="form__field form-field_page_profile"
            titleClassModificator="form-field__title_page_profile"
            inputClassModificator="form-field__input_page_profile"
            name="email"
            ref="email"
            validate="email"
            id="profile-email"
            type="email"
            placeholder="pochta@yandex.ru"
            required=true
        }}}

        {{{ Input
            title="Логин"
            class="form__field form-field_page_profile"
            titleClassModificator="form-field__title_page_profile"
            inputClassModificator="form-field__input_page_profile"
            name="login"
            ref="login"
            validate="login"
            id="profile-login"
            type="text"
            placeholder="ivanivanov"
            required=true
        }}}

        {{{ Input
            title="Имя"
            class="form__field form-field_page_profile"
            titleClassModificator="form-field__title_page_profile"
            inputClassModificator="form-field__input_page_profile"
            name="first_name"
            ref="first_name"
            validate="name"
            id="profile-first-name"
            type="text"
            placeholder="Иван"
            required=true
        }}}

        {{{ Input
            title="Фамилия"
            class="form__field form-field_page_profile"
            titleClassModificator="form-field__title_page_profile"
            inputClassModificator="form-field__input_page_profile"
            name="second_name"
            ref="second_name"
            validate="name"
            id="profile-last-name"
            type="text"
            placeholder="Иванов"
            required=true
        }}}

        {{{ Input
            title="Имя в чате"
            class="form__field form-field_page_profile"
            titleClassModificator="form-field__title_page_profile"
            inputClassModificator="form-field__input_page_profile"
            name="display_name"
            ref="display_name"
            validate="name"
            id="profile-display-name"
            type="text"
            placeholder="Иван"
            required=true
        }}}

        {{{ Input
            title="Телефон"
            class="form__field form-field_page_profile"
            titleClassModificator="form-field__title_page_profile"
            inputClassModificator="form-field__input_page_profile"
            name="phone"
            ref="phone"
            validate="phone"
            id="profile-phone"
            type="tel"
            placeholder="+7 (909) 967 30 30"
            required=true
        }}}
      
        <button class="form__submit-button" type="submit">
            Сохранить
        </button>
      
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


export default FormSettings;
