import Block from '../Block/Block.ts'
import Input from '../Input/Input.ts';

class FormTest extends Block {
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
      console.log(this.refs.login)
      console.log(this.children[0]);

      /* --- а вот это напрашивается как метод класса Form от которого мы будем унаследовать все формы */
      const validatesField = this.children.filter(
        // (c) => c instanceof Input &&  c.isNeedValidate() // filter без предиката-типа возвращает Block<object>[], поэтому ты кастуешь. Добавь предикат — каст исчезнет:
        (c): c is Input => c instanceof Input && c.isNeedValidate()
      ) // as Input[] ;

      const checkAll = (fields: Input[]) => {
        return fields.every(f => f.validate() === null)
      }

      /* --- вот это пока игнорь, можно достать через getValue */
      const loginInput = this.refs.login.querySelector('#login') as HTMLInputElement;
      const passwordInput = this.refs.password.querySelector('#password') as HTMLInputElement;
      /* --- */
      
      if (checkAll(validatesField)) {
        console.log(
          loginInput.value,
          passwordInput.value
        );
      }
    },
  };
  
}

export default FormTest;
