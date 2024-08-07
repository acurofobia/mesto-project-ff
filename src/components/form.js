import { handlePopupClose } from "./modal";
import { handleImageClick } from "../index";
import { addCard, deleteCard, handleLikeClick } from "./card";

export const formEditProfile = document.forms["edit-profile"];
export const formAddCard = document.forms["new-place"];
export const cardList = document.querySelector(".places__list");
export const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(".popup__input_type_description");
const cardNameInput = formAddCard.querySelector(".popup__input_type_card-name");
const cardLinkInput = formAddCard.querySelector(".popup__input_type_url");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  handlePopupClose(evt);
}

export function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardValue = { name: cardNameInput.value, link: cardLinkInput.value };
  const options = { handleImageClick, handleLikeClick };
  cardList.prepend(addCard(cardValue, deleteCard, options));
  evt.target.reset();
  handlePopupClose(evt);
}