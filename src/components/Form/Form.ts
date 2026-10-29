import Block from "../Block/Block";
import Input from "../Input/Input";

abstract class Form extends Block {
 
  protected get fields() {
    return this.children.filter((f): f is Input => f instanceof Input);
  }

  protected getValidatedFields() {
    return this.fields.filter(f => f.isNeedValidate());
  }

  protected checkAll = (fields: Input[]) => {
    return fields.map((f) => f.validate())      
  }

  protected validateAll() {
    return this.checkAll(this.getValidatedFields())
  }

  protected aggValues() {
    const values = {} as Record<string, string>;
    
    return this.fields.reduce((acc, currField) => {
      const ref = currField.getRef();
      if (ref) {
        acc[ref] = currField.getValue()
      };
      return acc;
    }, values)
  }
}

export default Form;
