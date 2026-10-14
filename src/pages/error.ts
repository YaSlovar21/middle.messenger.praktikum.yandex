import Handlebars from "handlebars";
import errorTpl from "./error.hbs?raw";

export function render404(root: HTMLElement) {
  const template = Handlebars.compile(errorTpl);
  const html = template({
    title: "404",
    subtitle: "Не туда попали",
  });

  root.innerHTML = html;
}

export function render500(root: HTMLElement) {
  const template = Handlebars.compile(errorTpl);
  const html = template({
    title: "500",
    subtitle: "Мы уже фиксим",
  });

  root.innerHTML = html;
}
