import SettingsPage from "../components/SettingsPage/SettingsPage";

export function renderSettings(root: HTMLElement, { isEditing = true } = {}) {

  const sPage = new SettingsPage();

  const element = sPage.element();
  root.innerHTML = "";
  
  if (element) {
    root.appendChild(element);
  }

 /* const template = Handlebars.compile(settingsTpl);
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
  });*/
}
