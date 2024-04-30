export function openPopup(element, options) {
  element.classList.add("popup_is-opened");
  element.addEventListener("click", closePopup);
  // проверяю, были ли переданы аргументы
  if (options && options.src) {
    // если не делать первую проверку, выдает ошибку
    element.querySelector(".popup__image").src = options.src; // заполняю в попапе ссылку на изображение
  }
  if (options && options.caption) {
    element.querySelector(".popup__caption").textContent = options.caption; // заполняю в попапе описание картинки
  }
  if (options && options.nameAndJobList) {
    element.querySelector(".popup__input_type_name").value =
      options.nameAndJobList[0]; // заполняю в попапе редактирования профиля имя и описание
    element.querySelector(".popup__input_type_description").value =
      options.nameAndJobList[1];
  }
  if (options && options.clean === true) {
    // передаю в options - clean === true (в index.js) для попапа добавления карточки, чтобы при открытии поля очищались
    element.querySelector(".popup__input_type_card-name").value = "";
    element.querySelector(".popup__input_type_url").value = "";
  }
}

export function closePopup(evt) {
  const openedPopup = document.querySelector(".popup_is-opened"); // Ищу на странице открытый попап
  if (
    evt.target.classList.contains("popup__close") || // Если клик произошел по кнопке закрытия попапа
    evt.target.classList.contains("popup_is-opened") || // Если клик произошел по оверлею
    (evt.key === "Escape" && openedPopup) || // Если был нажат Esc и на странице найден открытый попап
    evt.target.classList.contains("popup__button") // Если клик произошел по кнопке сохранить, закрываем попап
  ) {
    openedPopup.classList.remove("popup_is-opened");
    openedPopup.removeEventListener("click", closePopup); // Удаляю класс и листенер
  }
}
