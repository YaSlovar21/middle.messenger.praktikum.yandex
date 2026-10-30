import Block, { type BlockOwnProps } from "../Block/Block";
import AvatarTpl from "./avatar.hbs?raw";

interface AvatarType  extends BlockOwnProps {
  class?: string,
  isChangeButtonEnabled?: boolean,
}

class Avatar extends Block<AvatarType>{
  
  static readonly componentName = 'Avatar'
  
  protected template = `
    ${AvatarTpl}
  `;

}

export default Avatar;
export type {AvatarType}
