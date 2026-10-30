import Form from "../Form/Form";

class FormPasswordChange extends Form {
  
  protected template = `
    <form class="form form_page_profile" action="/" method="post" novalidate>
    <h2 class="form__title">Изменить пароль</h2>

    {{{ Input
        title="Старый пароль"
        class="form__field form-field_page_profile"
            titleClassModificator="form-field__title_page_profile"
            inputClassModificator="form-field__input_page_profile"
        name="old_password"
        id="old-password"
        type="password"
        validate="password"
        placeholder="••••••••••••"
        required=true
    }}}

    {{{ Input
        title="Новый пароль"
        name="new_password"
        id="new-password"
        class="form__field form-field_page_profile"
            titleClassModificator="form-field__title_page_profile"
            inputClassModificator="form-field__input_page_profile"
        type="password"
        placeholder="••••••••••••"
        required=true
        validate="password"
    }}}

    <button class="form__submit-button" type="submit">Изменить пароль</button>
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

export default FormPasswordChange;
