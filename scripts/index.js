// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function addCard(cardValue, deleteCallback) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardElement.querySelector(".card__image").setAttribute("src", cardValue.link);
  cardElement.querySelector(".card__title").textContent = cardValue.name;
  deleteButton.addEventListener("click", () => deleteCallback(cardElement));

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(card) {
  card.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((cardValue) => {
  const cardElement = addCard(cardValue, deleteCard);
  cardList.append(cardElement);
});

Try github vscode

