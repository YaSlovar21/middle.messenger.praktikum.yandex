import { validators, type ValidatorName } from '../../utils/validators';
import Block, { type BlockOwnProps } from '../Block/Block';

export interface InputProps extends BlockOwnProps{
  type?: 'text' | 'password' | 'email' | 'tel' ;
  name: string;
  placeholder?: string;
  validate?: ValidatorName;
  ref?: string; // обрабатывается хелпером, в шаблоне не используется
}

class Input extends Block<InputProps> {
  static componentName = 'Input';
  public getRef(): string | undefined {
    return (this.props as { ref?: string }).ref;
  }

  /*protected template = `
    <label class="form-field {{#if class}}{{class}}{{/if}}">
      <span class="form-field__title {{#if titleClassModificator}} {{titleClassModificator}} {{/if}}">{{title}}</span>
      <input ref="{{ref}}" class="form-field__input {{#if inputClassModificator}} {{inputClassModificator}} {{/if}}" type="{{type}}" name="{{name}}"  id="{{ref}}" placeholder="{{placeholder}}" {{#if required}}required{{/if}}>
      <span class="form-field__error {{ref}}-error"></span>
    </label>
  `;*/
// id="{{ref}}" 
  protected template = `
    <div class="input form-field {{#if class}}{{class}}{{/if}}" data-input="{{name}}">
      <span class="form-field__title {{#if titleClassModificator}} {{titleClassModificator}} {{/if}}">{{title}}</span>
      <input
        class="input__field form-field__input {{#if inputClassModificator}} {{inputClassModificator}} {{/if}}"
        type="{{type}}"
        name="{{name}}"
        id="{{name}}"
        placeholder="{{placeholder}}"
        ref="{{ref}}"
        {{#if required}}required{{/if}}
      />
      <span class="form-field__error" data-error-for="{{name}}"></span>
    </div>
  `;

  public isNeedValidate() {
    return !!this.props.validate;
  }

  protected events = {
    blur: () => {
      // console.log("hjhk")
      this.validate();
    },
    input: () => {
      // чистим ошибку по мере ввода
      // console.log("hjhk", this.getValue())
      const errorEl = this.getErrorEl();
      if (errorEl) errorEl.textContent = '';
      this.validate();
    
     
    },
  };

  public getValue(): string {
    const el = this.element()?.querySelector('input');
    return (el as HTMLInputElement | null)?.value ?? '';
  }

  public getName(): string {
    return this.props.name;
  }

  /** Возвращает текст ошибки или null, если валидно */
  public validate(): string | null {
    const validatorName = this.props.validate;
    if (!validatorName) return null;

    const validator = validators[validatorName];
    if (!validator) {
      console.warn(`[Input] unknown validator "${validatorName}"`);
      return null;
    }

    const error = validator(this.getValue());
    
    const errorEl = this.getErrorEl();
    // console.log(error, errorEl)
    if (error && errorEl) errorEl.textContent = error;

    return error;
  }

  public setError(message: string | null) {
    const errorEl = this.getErrorEl();
    if (errorEl) errorEl.textContent = message ?? '';
  }

  // ===== PRIVATE =====

  private getErrorEl(): HTMLElement | null {
    return (
      (this.element()?.querySelector(
        `[data-error-for="${this.props.name}"]`
      ) as HTMLElement | null) ?? null
    );
  }

}

export default Input;
