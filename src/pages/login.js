import Handlebars from "handlebars";
import loginTpl from "./login.hbs?raw";

export function renderLogin(root) {
  const template = Handlebars.compile(loginTpl);
  const html = template({});

  root.innerHTML = html;
}
