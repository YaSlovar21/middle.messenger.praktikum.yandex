
import ErrorPage from "../components/ErrorPage/ErrorPage";

export function render404(root: HTMLElement) {

  const page = new ErrorPage({
    title: "404",
    subtitle: "Не туда попали"
  });
  const pageElement = page.element();
  
  root.innerHTML = "";

  if (pageElement) {
    root.appendChild(pageElement)
  }
}


export function render500(root: HTMLElement) {
  const page = new ErrorPage({
    title: "500",
    subtitle: "Мы уже фиксим"
  });
  const pageElement = page.element();
  
  root.innerHTML = "";

  if (pageElement) {
    root.appendChild(pageElement)
  }
}
