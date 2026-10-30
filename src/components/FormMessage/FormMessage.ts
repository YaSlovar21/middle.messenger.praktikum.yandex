import Form from "../Form/Form";

class FormMessage extends Form {
  static readonly componentName = "FormMessage";
  
  protected template= `
      <form class="form-message">
        <button type="button" class="form-message__file-button">
          <img src="/skrepka.svg" alt="Добавить файл">
        </button>
        {{{
          Input 
          ref="message"
          name="message" 
          class="form-message__input" 
          type="text"
          validate="message"
        }}}
        <button type="submit" class="form-message__submit-button">
          <img src="/strelka.svg" alt="Отправить">
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


export default FormMessage;
