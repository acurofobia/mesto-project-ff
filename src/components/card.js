import { openPopup } from "./modal";

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

  cardImage.addEventListener("click", () => {
    const popupTypeImage = document.querySelector(".popup_type_image");
    openPopup(popupTypeImage, {
      src: cardImage.src,
      caption: cardCaption.textContent,
    });
  });

  likeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like-button_is-active");
  });

  return cardElement;
}

// @todo: Функция удаления карточки
export function deleteCard(card) {
  card.remove();
}
