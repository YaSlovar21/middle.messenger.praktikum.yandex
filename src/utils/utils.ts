// src\utils\utils.ts
import Handlebars from 'handlebars';
import  type { HelperOptions } from 'handlebars'; 
import type { BlockOwnProps } from '../components/Block/Block';


let uniqueId = 0;

type ComponentClass<Props extends BlockOwnProps> = {
  new (props: Props): { 
    element(): Element | null 
  };
  componentName: string;
};

function registerComponent<P extends BlockOwnProps>(Component: ComponentClass<P>) {
 
  
  Handlebars.registerHelper(
    Component.componentName,
    function (this: unknown, { hash, data }: HelperOptions) {
      
      const dataAttribute = `data-component-hbs-id="${++uniqueId}"`;
      console.log('[helper]', Component.componentName, '→', dataAttribute);

      const props = hash as P;
      const component = new Component(props);
      
      if ('ref' in hash) {
        (data.root.__refs = data.root.__refs || {})[hash.ref] = component.element(); // у нас реф смотрит на компонент чтоли???
      }
      
      (data.root.__children = data.root.__children || []).push({
        component,
        embed(node: DocumentFragment) {      
          const placeholder = node.querySelector(`[${dataAttribute}]`); 
          if (!placeholder) {
            throw new Error(`Can't find data-id for component ${Component.componentName}`);
          }
          
          const element = component.element();
          if (!element) {
            throw new Error('Component element is not created');
          }
          
          placeholder.replaceWith(element);
        }
      });
      
      return `<div ${dataAttribute}></div>`;
    }
  );
}

export {registerComponent};
