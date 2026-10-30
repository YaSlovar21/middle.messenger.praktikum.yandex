import chatTpl from "./chat.hbs?raw";
import Block, { type BlockOwnProps } from "../Block/Block.ts";

type Message = {
  text?: string;
  imageUrl?: string;
  time: string;
  isMine?: boolean;
}

type ChatItem = {
  name: string,
  time: string,
  messagePreview: string,
  unreadCount: number,
}

interface IChatPageProps extends BlockOwnProps {
  messages: Message[],
  chats: ChatItem[]
}

class ChatPage extends Block<IChatPageProps> {
  protected template= `
    ${chatTpl}
  `
}

export default ChatPage;
