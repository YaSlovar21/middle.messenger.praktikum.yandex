import Handlebars from "handlebars";
import { chats, messages } from "../utils/mocks.ts";
import chatTpl from "./chat.hbs?raw";

export function renderChat(root: HTMLElement) {
  const template = Handlebars.compile(chatTpl);
  const html = template({
    chats,
    messages,
  });

  root.innerHTML = html;
}
