import "./index.css";

import Handlebars from "handlebars";

import { renderRegistration } from "./pages/registration.js";
import { renderLogin } from "./pages/login.js";
import { renderChat } from "./pages/chat.js";
import { renderSettings } from "./pages/settings.js";
import { render500, render404 } from "./pages/error.js";

// import formFieldTpl from "./components/form-field/form-field.hbs?raw";
// import chatItemTpl from "./components/chat-item/chat-item.hbs?raw";
// import avatarTpl from "./components/avatar/avatar.hbs?raw";
// import chatMessageTpl from "./components/chat-message/chat-message.hbs?raw";
// import { renderPageComponent } from "./pages/block-page.js";
import { registerComponent } from "./utils/utils.js";
import Input, { type InputProps } from "./components/Input/Input.ts";
import Button, { type ButtonProps } from "./components/Button/Button.ts";
import ErrorPage, { type IErrorPageProps } from "./components/ErrorPage/ErrorPage.ts";
import FormRegistration from "./components/FormRegistration/FormRegistration.ts";
import ChatItem, { type ChatItemType } from "./components/ChatItem/ChatItem.ts";
import ChatMessage, {type ChatMessageType } from "./components/ChatMessage/ChatMessage.ts";
import Avatar, { type AvatarType } from "./components/Avatar/Avatar.ts";
import { renderPasswordChange } from "./pages/password-change.ts";
import FormMessage from "./components/FormMessage/FormMessage.ts";
import FormSettings from "./components/FormSettings/FormSettings.ts";

Handlebars.registerHelper("eq", (a, b) => a === b);
// Handlebars.registerPartial("avatar", avatarTpl);
// Handlebars.registerPartial("form-field", formFieldTpl);
// Handlebars.registerPartial("chat-item", chatItemTpl);
// Handlebars.registerPartial("chat-message", chatMessageTpl);

registerComponent<InputProps>(Input);
registerComponent<ButtonProps>(Button);
registerComponent<IErrorPageProps>(ErrorPage);
registerComponent<ChatItemType>(ChatItem)
registerComponent<ChatMessageType>(ChatMessage);
registerComponent<AvatarType>(Avatar);

registerComponent(FormRegistration);
registerComponent(FormMessage);
registerComponent(FormSettings);

const app = document.getElementById("app");

if (!app) {
  throw new Error("Root element #app not found");
}

/* меню для 1-2 спринта до роутинга */
const regButton = document.querySelector(".registration");
const loginButton = document.querySelector(".login");
const chatButton = document.querySelector(".chat-nav-item");
const settingsButton = document.querySelector(".settings-nav-item");
const notFoundButton = document.querySelector(".not-found");
const serverErrorButton = document.querySelector(".server-error-nav-item");
const changePassButton = document.querySelector(".change-pass-nav-item");

regButton?.addEventListener("click", () => renderRegistration(app));
loginButton?.addEventListener("click", () => renderLogin(app));
chatButton?.addEventListener("click", () => renderChat(app));
settingsButton?.addEventListener("click", () => renderSettings(app));
notFoundButton?.addEventListener("click", () => render404(app));
serverErrorButton?.addEventListener("click", () => render500(app));
changePassButton?.addEventListener("click", () => renderPasswordChange(app));

renderRegistration(app);
