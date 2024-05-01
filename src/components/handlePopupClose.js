import { closePopup } from "./modal";

export function handlePopupClose(evt) {
  console.log("evt.target");
  if (
    evt.target.classList.contains("popup__close") || // Если клик произошел по кнопке закрытия попапа
    evt.target.classList.contains("popup_is-opened") || // Если клик произошел по оверлею
    evt.target.classList.contains("popup__button") // Если клик произошел по кнопке сохранить, закрываем попап
  ) {
    const openedPopup = document.querySelector(".popup_is-opened");
    console.log(openedPopup);
    closePopup(openedPopup);
  }
}
