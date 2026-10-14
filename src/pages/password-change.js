import Handlebars from "handlebars";
import passwordChangeTpl from "./password-change.hbs?raw";
import { renderSettings } from "./settings.js";

export function renderPasswordChange(root) {
  const template = Handlebars.compile(passwordChangeTpl);
  const html = template({});

  root.innerHTML = html;

  document.querySelector(".form").addEventListener("submit", (evt)=> {
    evt.preventDefault();
    renderSettings(root, {isEditing: false});
  })
}
