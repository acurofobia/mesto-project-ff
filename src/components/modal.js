export function openPopup(element) {
  element.classList.add("popup_is-opened");
  element.addEventListener("click", handlePopupClose);
  document.addEventListener("keydown", handleEscape);
}

export function closePopup(element) {
  element.classList.remove("popup_is-opened");
  element.removeEventListener("click", closePopup); // Удаляю класс и листенер
  document.removeEventListener("keydown", handleEscape);
}

export function handleProfileEditPopup(options) {
  options.name.value = options.nameAndJobList.title; // заполняю в попапе редактирования профиля имя и описание
  options.description.value = options.nameAndJobList.description;
  openPopup(options.element);
}

export function handleProfileImagePopup(options) {
  options.image.src = options.src; // заполняю в попапе ссылку на изображение
  options.image.alt = options.caption;
  options.description.textContent = options.caption; // заполняю в попапе описание картинки
  openPopup(options.element);
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
    evt.target.classList.contains("popup_is-opened") || // Если клик произошел по оверлею
    evt.target.classList.contains("popup__button") // Если клик произошел по кнопке сохранить, закрываем попап
  ) {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}
