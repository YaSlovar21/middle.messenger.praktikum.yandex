export const validators = {
  email: (v: string) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v) ? null : 'Некорректный email',
  password: (v: string) =>  v.length >= 12 ? null : 'Минимум 12 символов',
  
  phoneRu: (v: string) => /^(?:\+7|8)\d{10}$/.test(v) ? null : 'Некорректный телефон',
  name: (v: string) => /^[А-ЯЁA-Z][а-яёa-z]*(?:[-\s][А-ЯЁA-Z][а-яёa-z]*)*$/.test(v) ? null : 'Некорректное имя',
  required: (v: string) => v.trim().length > 0 ? null : 'Обязательное поле',
};

export type ValidatorName = keyof typeof validators;
