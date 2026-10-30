import ChatPage from "../components/ChatPage/ChatPage.ts";
import { chats, messages } from "../utils/mocks.ts";


export function renderChat(root: HTMLElement) {
  
  const template = new ChatPage({
    messages,
    chats
  });

  const element = template.element();

  root.innerHTML = "";
  
  if (element) {
    root.appendChild(element);
    //form.setProps({ buttonName: "Клик" });
  }
}
