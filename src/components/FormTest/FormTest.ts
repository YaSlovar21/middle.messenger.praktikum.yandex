import Block from '../Block/Block.ts'

interface FormTestProps {
  buttonName: string;
}

class FormTest extends Block<FormTestProps> {
  protected template = `
    <form>
      <input type="text" placeholder="Логин" ref="login">
      <input type="password" placeholder="Пароль" ref="password">
      <button>{{ buttonName }}</button>
    </form>
  `;

  componentDidMount() {
    setTimeout(() => {
      // this.setProps({ buttonName: "Клик через 3 секунды!" }) // изменения пропсов включает перерендер, а перерендер вызывает componentDidMount
      console.log("Смонтировано 3 секунды назад");
    }, 3000); 
  }

  protected events = {
    submit: (event : Event) => {
      event.preventDefault();
      console.log((this.refs.login as HTMLInputElement).value);
      console.log((this.refs.password as HTMLInputElement).value);
    },
  };
  
}

export default FormTest;
