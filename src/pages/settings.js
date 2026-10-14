import Handlebars from "handlebars";
import settingsTpl from "./settings.hbs?raw";
import { renderPasswordChange } from "./password-change.js";

Handlebars.registerHelper("eq", (a, b) => a === b);

export function renderSettings(root, { isEditing = true } = {}) {
  const template = Handlebars.compile(settingsTpl);
  const html = template({
    isEditing,
  });

  root.innerHTML = html;

  // Переключение в режим редактирования
  root.querySelector(".change-data")?.addEventListener("click", (e) => {
    e.preventDefault();
    renderSettings(root, { isEditing: true });
  });

  root.querySelector(".change-password")?.addEventListener("click", (e) => {
    e.preventDefault();
    renderPasswordChange(root);
  });

  // Сохранение → обратно в просмотр
  root.querySelector(".form__submit-button")?.addEventListener("click", (e) => {
    e.preventDefault();
    renderSettings(root, { isEditing: false });
  });
}
