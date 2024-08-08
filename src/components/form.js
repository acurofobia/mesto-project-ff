import { handlePopupClose } from "./modal";
import { handleImageClick } from "../index";
import { addCard, deleteCard, handleLikeClick } from "./card";
import { updateProfileData, addNewCard, updateAvatar } from "./api";

export const formEditProfile = document.forms["edit-profile"];
export const formAddCard = document.forms["new-place"];
export const formChangeAvatar = document.forms["change-avatar"];
const formEditProfileButton = formEditProfile.querySelector(".button");
const formAddCardButton = formAddCard.querySelector(".button");
const formChangeAvatarButton = formChangeAvatar.querySelector(".button");
export const cardList = document.querySelector(".places__list");
export const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(".popup__input_type_description");
const cardNameInput = formAddCard.querySelector(".popup__input_type_card-name");
const cardLinkInput = formAddCard.querySelector(".popup__input_type_url");
const avatarLinkInput = formChangeAvatar.querySelector(".popup__input_type_url_avatar");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");
export const profileImage = document.querySelector(".profile__image");

function setLoading(isLoading, button, text) {
  if (isLoading) {
    button.textContent = 'Сохранение...';
  } else {
    button.textContent = text;
  }
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const text = evt.target.querySelector(".button").textContent;
  setLoading(true, formEditProfileButton);
  updateProfileData(nameInput.value, jobInput.value)
    .then((data) => {
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about
      handlePopupClose(evt);
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false, formEditProfileButton, text))
}

export function handleCardFormSubmit(evt, userId) {
  evt.preventDefault();
  const text = evt.target.querySelector(".button").textContent;
  setLoading(true, formAddCardButton);
  addNewCard(cardNameInput.value, cardLinkInput.value)
    .then((data) => {
      const cardValue = data;
      const options = { handleImageClick, handleLikeClick, userId };
      cardList.prepend(addCard(cardValue, deleteCard, options));
      evt.target.reset();
      handlePopupClose(evt);
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false, formAddCardButton, text))
}

export function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const text = evt.target.querySelector(".button").textContent;
  setLoading(true, formChangeAvatarButton);
  updateAvatar(avatarLinkInput.value)
    .then((data) => {
      profileImage.style.backgroundImage = `url(${data.avatar})`;
      evt.target.reset();
      handlePopupClose(evt);
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false, formChangeAvatarButton, text))
}