import Handlebars from "handlebars";
import loginTpl from "./login.hbs?raw";

export function renderLogin(root: HTMLElement) {
  const template = Handlebars.compile(loginTpl);
  const html = template({});

  root.innerHTML = html;
}
