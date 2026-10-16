
import loginTpl from "./login.hbs?raw";
import Block from "../components/Block/Block";

class LoginPage extends Block {
  static readonly componentName = 'LoginPage';

  protected template = `
    ${loginTpl}
  `;
}

export function renderLogin(root: HTMLElement) {

  const loginPageComp = new LoginPage();
  console.log(loginPageComp);
  const loginPageEl = loginPageComp.element();
  
  root.innerHTML = "";

  if (loginPageEl) {
    root.appendChild(loginPageEl)
  }

}
