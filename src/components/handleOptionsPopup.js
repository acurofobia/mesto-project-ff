export function handleOptionsPopup(element, options) {
  // проверяю, были ли переданы аргументы
  if (options && options.src) {
    // если не делать первую проверку, выдает ошибку
    element.querySelector(".popup__image").src = options.src; // заполняю в попапе ссылку на изображение
    element.querySelector(".popup__image").alt = options.caption;
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
}
