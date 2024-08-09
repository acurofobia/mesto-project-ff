export function openPopup(element) {
  element.classList.add("popup_is-opened");
  element.addEventListener("click", handlePopupClose);
  document.addEventListener("keydown", handleEscape);
}

export function closePopup(element) {
  element.classList.remove("popup_is-opened");
  element.removeEventListener("click", handlePopupClose); // Удаляю класс и листенер
  document.removeEventListener("keydown", handleEscape);
}

export function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}

export function handlePopupClose(evt) {
  if (
    evt.target.classList.contains("popup__close") || // Если клик произошел по кнопке закрытия попапа
    evt.target.classList.contains("popup_is-opened") // Если клик произошел по оверлею
    // evt.target.classList.contains("popup__button") // Если клик произошел по кнопке сохранить, закрываем попап
  ) {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}
