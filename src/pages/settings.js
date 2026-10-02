import Handlebars from 'handlebars';
import settingsTpl from './settings.hbs?raw';

Handlebars.registerHelper('eq', (a, b) => a === b);

export function renderSettings(root, {isEditing = true} = {}) {
  const template = Handlebars.compile(settingsTpl);
  const html = template({
    isEditing
  });

  root.innerHTML = html;

  // Переключение в режим редактирования
  root.querySelector('.change-data')?.addEventListener('click', (e) => {
    e.preventDefault();
    renderSettings(root, { isEditing: true });
  });

  // Сохранение → обратно в просмотр
  root.querySelector('.form__submit-button')?.addEventListener('click', (e) => {
    e.preventDefault();
    renderSettings(root, { isEditing: false });
  });
}