import { handleImageClick } from "./handleImageClick";
import { handleLikeClick } from "./handleLikeClick";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
export function addCard(cardValue, deleteCallback) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardCaption = cardElement.querySelector(".card__title");

  cardImage.setAttribute("src", cardValue.link);
  cardElement.querySelector(".card__title").textContent = cardValue.name;
  deleteButton.addEventListener("click", () => deleteCallback(cardElement));

  handleImageClick(cardImage, cardCaption);

  handleLikeClick(likeButton);

  return cardElement;
}

// @todo: Функция удаления карточки
export function deleteCard(card) {
  card.remove();
}
