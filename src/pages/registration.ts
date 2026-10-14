import Handlebars from "handlebars";
import registrationTpl from "./registration.hbs?raw";

export function renderRegistration(root: HTMLElement) {
  const template = Handlebars.compile(registrationTpl);
  const html = template({});

  root.innerHTML = html;
}
