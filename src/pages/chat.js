import Handlebars from "handlebars";
import { chats, messages } from "../utils/mocks";
import chatTpl from "./chat.hbs?raw";

export function renderChat(root) {
  const template = Handlebars.compile(chatTpl);
  const html = template({
    chats,
    messages,
  });

  root.innerHTML = html;
}
