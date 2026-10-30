import Block, { type BlockOwnProps } from "../Block/Block";
import ChatMessageTpl from "./chat-message.hbs?raw";

interface ChatMessageType  extends BlockOwnProps {
    text?: string;
    imageUrl?: string;
    time: string;
    isMine?: boolean;
}

class ChatMessage extends Block<ChatMessageType>{
  
  static readonly componentName = 'ChatMessage'
  
  protected template = `
    ${ChatMessageTpl}
  `;

}

export default ChatMessage;
export type {ChatMessageType}
