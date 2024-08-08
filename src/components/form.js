import { handlePopupClose } from "./modal";
import { handleImageClick } from "../index";
import { addCard, deleteCard, handleLikeClick } from "./card";
import { updateProfileData, addNewCard } from "./api";

export const formEditProfile = document.forms["edit-profile"];
export const formAddCard = document.forms["new-place"];
export const cardList = document.querySelector(".places__list");
export const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(".popup__input_type_description");
const cardNameInput = formAddCard.querySelector(".popup__input_type_card-name");
const cardLinkInput = formAddCard.querySelector(".popup__input_type_url");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");
export const profileImage = document.querySelector(".profile__image");

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  updateProfileData(nameInput.value, jobInput.value)
    .then((data) => {
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about
      handlePopupClose(evt);
    })
    .catch(error => console.log(error))
}

export function handleCardFormSubmit(evt, userId) {
  evt.preventDefault();
  addNewCard(cardNameInput.value, cardLinkInput.value)
    .then((data) => {
      const cardValue = data;
      const options = { handleImageClick, handleLikeClick, userId };
      cardList.prepend(addCard(cardValue, deleteCard, options));
      evt.target.reset();
      handlePopupClose(evt);
    })
    .catch(error => console.log(error))
}