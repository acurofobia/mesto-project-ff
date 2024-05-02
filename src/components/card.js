import { handleProfileImagePopup } from "./modal";

const cardTemplate = document.querySelector("#card-template").content;
const popupTypeImage = document.querySelector(".popup_type_image");
const popupTypeImageMain = popupTypeImage.querySelector(".popup__image");
const popupTypeImageDescription =
  popupTypeImage.querySelector(".popup__caption");

export function addCard(cardValue, deleteCallback, options) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardCaption = cardElement.querySelector(".card__title");

  cardImage.setAttribute("src", cardValue.link);
  cardImage.setAttribute("alt", cardValue.name);
  cardElement.querySelector(".card__title").textContent = cardValue.name;
  deleteButton.addEventListener("click", () => deleteCallback(cardElement));

  options.handleImageClick(cardImage, cardCaption);

  options.handleLikeClick(likeButton);

  return cardElement;
}

export function deleteCard(card) {
  card.remove();
}

export function handleImageClick(cardImage, cardCaption) {
  cardImage.addEventListener("click", () => {
    handleProfileImagePopup({
      element: popupTypeImage,
      src: cardImage.src,
      caption: cardCaption.textContent,
      image: popupTypeImageMain,
      description: popupTypeImageDescription,
    });
  });
}

export function handleLikeClick(likeButton) {
  likeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like-button_is-active");
  });
}
