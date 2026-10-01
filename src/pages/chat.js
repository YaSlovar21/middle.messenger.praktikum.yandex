import Handlebars from 'handlebars';
import chatTpl from './chat.hbs?raw';

export function renderChat(root) {
  const template = Handlebars.compile(chatTpl);
  const html = template({});

  root.innerHTML = html;
}