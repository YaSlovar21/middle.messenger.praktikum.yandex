import Block, { type BlockOwnProps } from "../Block/Block";
import chatItemTpl from "./chat-item.hbs?raw";

interface ChatItemType  extends BlockOwnProps {
  name: string,
  time: string,
  messagePreview: string,
  unreadCount: number,
}

class ChatItem extends Block<ChatItemType>{
  
  static readonly componentName = 'ChatItem'
  
  protected template = `
    ${chatItemTpl}
  `;

}

export default ChatItem;
export type {ChatItemType}
