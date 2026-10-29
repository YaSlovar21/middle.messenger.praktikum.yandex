import FormRegistration from "../components/FormRegistration/FormRegistration";
import FormTest from "../components/FormTest/FormTest";

export function renderPageComponent(root: HTMLElement) {
  
  //const form = new FormTest();
  const form = new FormRegistration();
  const formElement = form.element();

  root.innerHTML = "";
  
  if (formElement) {
    root.appendChild(formElement);
    //form.setProps({ buttonName: "Клик" });
  }

}


