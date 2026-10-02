import './index.css';

import Handlebars from "handlebars";

import { renderRegistration } from './pages/registration.js';
import { renderLogin } from './pages/login.js';
import { renderChat } from './pages/chat.js';
import { renderSettings } from './pages/settings.js';
import { render500, render404 } from './pages/error.js';

import formFieldTpl from './components/form-field/form-field.hbs?raw';
import chatItemTpl from './components/chat-item/chat-item.hbs?raw';
import avatarTpl from './components/avatar/avatar.hbs?raw';
import chatMessageTpl from './components/chat-message/chat-message.hbs?raw';

Handlebars.registerPartial('avatar', avatarTpl);
Handlebars.registerPartial('form-field', formFieldTpl);
Handlebars.registerPartial('chat-item', chatItemTpl);
Handlebars.registerPartial('chat-message', chatMessageTpl);


/* меню для 1-2 спринта до роутинга */
const regButton = document.querySelector('.registration');
const loginButton = document.querySelector('.login');
const chatButton = document.querySelector('.chat-nav-item');
const settingsButton = document.querySelector('.settings-nav-item');
const notFoundButton = document.querySelector('.not-found');
const serverErrorButton = document.querySelector('.server-error-nav-item');

regButton.addEventListener('click', () => renderRegistration(app));
loginButton.addEventListener('click', () => renderLogin(app));
chatButton.addEventListener('click', () => renderChat(app));
settingsButton.addEventListener('click', () => renderSettings(app));
notFoundButton.addEventListener('click', () => render404(app));
serverErrorButton.addEventListener('click', () => render500(app));

renderChat(app);