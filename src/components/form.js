import { openPopup, handlePopupClose } from "./modal";
import { cardList, nameAndJobList } from "../index";
import { addCard, deleteCard, handleImageClick, handleLikeClick } from "./card";

export const formEditProfile = document.forms["edit-profile"];
export const formAddCard = document.forms["new-place"];
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);
const cardNameInput = formAddCard.querySelector(".popup__input_type_card-name");
const cardLinkInput = formAddCard.querySelector(".popup__input_type_url");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  nameAndJobList.title = nameInput.value;
  nameAndJobList.description = jobInput.value;
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
