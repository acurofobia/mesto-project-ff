import { handleEscape } from "./handleEscape";
import { handleOptionsPopup } from "./handleOptionsPopup";
import { handlePopupClose } from "./handlePopupClose";

export function openPopup(element, options) {
  element.classList.add("popup_is-opened");
  element.addEventListener("click", handlePopupClose);
  document.addEventListener("keydown", handleEscape);
  if (options) {
    // Если options не передаются, то функция работает как универсальная
    handleOptionsPopup(element, options);
  }
}

export function closePopup(element) {
  element.classList.remove("popup_is-opened");
  element.removeEventListener("click", closePopup); // Удаляю класс и листенер
  document.removeEventListener("keydown", handleEscape);
}
