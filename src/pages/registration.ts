
import FormRegistration from "../components/FormRegistration/FormRegistration";

export function renderRegistration(root: HTMLElement) {
  
  const form = new FormRegistration({
    //title: "Регистрация"
  });
  const formElement = form.element();

  root.innerHTML = "";
  
  if (formElement) {
    root.appendChild(formElement);
    //form.setProps({ buttonName: "Клик" });
  }
}
