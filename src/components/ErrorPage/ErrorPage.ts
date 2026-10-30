import Block, { type BlockOwnProps } from "../Block/Block";

interface IErrorPageProps extends BlockOwnProps {
  title: string,
  subtitle: string
}

class ErrorPage extends Block<IErrorPageProps> {
  static readonly componentName = 'Error';

  protected template = `
    <main class="server-error">
      <p class="server-error__title">{{title}}</p>
      <p class="server-error__description">{{subtitle}}</p>
      <a class="server-error__link link" href="#">Назад к чатам</a>
    </main>
  `;
}

export default ErrorPage;
export type { IErrorPageProps };
