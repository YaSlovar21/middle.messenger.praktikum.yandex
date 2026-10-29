import Block, { type BlockOwnProps } from '../Block/Block';

interface ButtonProps extends BlockOwnProps {
  label: string;
}

class Button extends Block<ButtonProps> {
  static readonly componentName = 'Button';
  
  protected template = `
    <button class={{class}}>{{label}}</button>
  `;
}

export default Button;
export type { ButtonProps };
