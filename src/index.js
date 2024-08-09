//Проблема при открытии модального окна с большой картинкой заключалась
//в том, что я случайно поместил div элемент с классом popup_type_image
//внутрь другого элемента, поэтому картинка не появлялась,
//вынес этот элемент на свое место. теперь все работает

//Так-же поработал над вашими замечаниями

import "./pages/index.css";
import { renderCards } from "./components/card.js";
import {
  formEditProfile,
  formAddCard,
  handleCardFormSubmit,
  handleProfileFormSubmit,
  handleAvatarFormSubmit,
  profileTitle,
  profileDescription,
  profileImage,
  formChangeAvatar
} from "./components/form.js";
import { openPopup } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import { getUserData, getCards } from "./components/api.js";

const profileElement = document.querySelector(".profile");
const profileEditPopup = document.querySelector(".popup_type_edit");
const profileEditPopupInputName = profileEditPopup.querySelector(
  ".popup__input_type_name"
);
const profileEditPopupInputDescription = profileEditPopup.querySelector(
  ".popup__input_type_description"
);
const profileAddPopup = document.querySelector(".popup_type_new-card");
const profileEditPopupButton = profileElement.querySelector(
  ".profile__edit-button"
);
const profileAddPopupButton = profileElement.querySelector(
  ".profile__add-button"
);
const profileChangeAvatarPopup = document.querySelector(".popup_type_change-avatar");

const avatarChangeButton = document.querySelector(".overlay");

let userId = '';

Promise.all([getUserData(), getCards()])
  .then(([userData, cardsData]) => {
    userId = userData._id;
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.style.backgroundImage = `url(${userData.avatar})`;

    renderCards(cardsData, userId);
  })
  .catch(error => console.log(error));


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
});

profileEditPopupButton.addEventListener("click", () => {
  handleProfileEditPopup({
    name: profileEditPopupInputName,
    description: profileEditPopupInputDescription,
    element: profileEditPopup,
  });
  clearValidation(formEditProfile, {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
  });
});

avatarChangeButton.addEventListener("click", () => openPopup(profileChangeAvatarPopup));

profileAddPopupButton.addEventListener("click", () => openPopup(profileAddPopup));

formEditProfile.addEventListener("submit", handleProfileFormSubmit);

formAddCard.addEventListener("submit", (evt) => {
  handleCardFormSubmit(evt, userId);
  clearValidation(formAddCard, {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
  });
});

formChangeAvatar.addEventListener("submit", (evt) => {
  handleAvatarFormSubmit(evt);
  clearValidation(formChangeAvatar, {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
  });
});

export function handleProfileEditPopup(options) {
  options.name.value = profileTitle.textContent; // заполняю в попапе редактирования профиля имя и описание
  options.description.value = profileDescription.textContent;
  openPopup(options.element);
}