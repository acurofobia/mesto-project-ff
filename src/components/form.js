import { addCard, deleteCard } from "./card";
import { updateProfileData, addNewCard, updateAvatar } from "./api";
import { closePopup } from "./modal";
import { clearValidation } from "./validation";

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
      clearValidation(formEditProfile, {
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__button',
        inactiveButtonClass: 'popup__button_disabled',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__error_active'
      });
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about
      const openedPopup = document.querySelector(".popup_is-opened");
      closePopup(openedPopup);
    })
    .catch(error => console.log(error))
    .finally(() => {
      setLoading(false, formEditProfileButton, text);
    })
}

export function handleCardFormSubmit(evt, options) {
  evt.preventDefault();
  const text = evt.target.querySelector(".button").textContent;
  setLoading(true, formAddCardButton);
  addNewCard(cardNameInput.value, cardLinkInput.value)
    .then((data) => {
      clearValidation(formAddCard, {
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__button',
        inactiveButtonClass: 'popup__button_disabled',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__error_active'
      });
      const cardValue = data;
      const cardElement = addCard(cardValue, deleteCard, options);
      cardList.prepend(cardElement);
      const openedPopup = document.querySelector(".popup_is-opened");
      closePopup(openedPopup);
      evt.target.reset();
    })
    .catch(error => console.log(error))
    .finally(() => {
      setLoading(false, formAddCardButton, text);
    })
}

export function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const text = evt.target.querySelector(".button").textContent;
  setLoading(true, formChangeAvatarButton);
  updateAvatar(avatarLinkInput.value)
    .then((data) => {
      clearValidation(formChangeAvatar, {
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__button',
        inactiveButtonClass: 'popup__button_disabled',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__error_active'
      });
      profileImage.style.backgroundImage = `url(${data.avatar})`;
      const openedPopup = document.querySelector(".popup_is-opened");
      closePopup(openedPopup);
      evt.target.reset();
    })
    .catch(error => console.log(error))
    .finally(() => {
      setLoading(false, formChangeAvatarButton, text);
    })
}