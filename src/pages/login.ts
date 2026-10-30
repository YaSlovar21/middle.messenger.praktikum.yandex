
import FormLogin from "../components/FormLogin/FormLogin";

export function renderLogin(root: HTMLElement) {

  const form = new FormLogin();
  const formElement = form.element();
  
  root.innerHTML = "";

  if (formElement) {
    root.appendChild(formElement)
  }

}
