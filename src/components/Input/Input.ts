import Block from '../Block/Block';

class Input extends Block {
  static componentName = 'Input';
  
  protected template = `
    <label class="form-field {{#if class}}{{class}}{{/if}}">
      <span class="form-field__title {{#if titleClassModificator}} {{titleClassModificator}} {{/if}}">{{title}}</span>
      <input ref="{{ref}}" class="form-field__input {{#if inputClassModificator}} {{inputClassModificator}} {{/if}}" type="{{type}}" name="{{name}}"  id="{{ref}}" placeholder="{{placeholder}}" {{#if required}}required{{/if}}>
      <span class="form-field__error {{ref}}-error"></span>
    </label>
  `;
}

export default Input;
