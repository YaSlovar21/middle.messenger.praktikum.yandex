import './index.css';

import Handlebars from "handlebars";

import { renderRegistration } from './pages/registration.js';
import { renderLogin } from './pages/login.js';
import { renderChat } from './pages/chat.js';
import { renderSettings } from './pages/settings.js';
import { render500, render404 } from './pages/error.js';

import formFieldTpl from './components/form-field/form-field.hbs?raw';
Handlebars.registerPartial('form-field', formFieldTpl);

/* меню для 1-2 спринта до роутинга */
const regButton = document.querySelector('.registration');
const loginButton = document.querySelector('.login');
const chatButton = document.querySelector('.chat');
const settingsButton = document.querySelector('.settings');
const notFoundButton = document.querySelector('.not-found');
const serverErrorButton = document.querySelector('.server-error');

regButton.addEventListener('click', () => renderRegistration(app));
loginButton.addEventListener('click', () => renderLogin(app));
chatButton.addEventListener('click', () => renderChat(app));
settingsButton.addEventListener('click', () => renderSettings(app));
notFoundButton.addEventListener('click', () => render404(app));
serverErrorButton.addEventListener('click', () => render500(app));