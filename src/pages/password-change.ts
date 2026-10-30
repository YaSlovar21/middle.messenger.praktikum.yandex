import FormPasswordChange from "../components/FormPasswordChange/FormPasswordChange.js";

export function renderPasswordChange(root: HTMLElement) {

  const form = new FormPasswordChange();
  const formElement = form.element();
  
  root.innerHTML = "";

  if (formElement) {
    root.appendChild(formElement)
  }
}
