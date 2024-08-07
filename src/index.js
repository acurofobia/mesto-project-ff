import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { deleteCard, addCard, handleLikeClick } from "./components/card.js";
import {
  formEditProfile,
  formAddCard,
  handleCardFormSubmit,
  handleProfileFormSubmit,
  profileTitle,
  profileDescription,
  cardList
} from "./components/form.js";
import { openPopup } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validation.js";

const popupTypeImage = document.querySelector(".popup_type_image");
const popupTypeImageMain = popupTypeImage.querySelector(".popup__image");
const popupTypeImageDescription =
  popupTypeImage.querySelector(".popup__caption");
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

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
}); 

// @todo: Вывести карточки на страницу
initialCards.forEach((cardValue) => {
  const options = { handleImageClick, handleLikeClick };
  const cardElement = addCard(cardValue, deleteCard, options);
  cardList.append(cardElement);
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

profileAddPopupButton.addEventListener("click", () => {
  openPopup(profileAddPopup);
});

formEditProfile.addEventListener("submit", handleProfileFormSubmit);

formAddCard.addEventListener("submit", (evt) => {
  handleCardFormSubmit(evt);
  clearValidation(formAddCard, {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
  });
});

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

export function handleProfileEditPopup(options) {
  options.name.value = profileTitle.textContent; // заполняю в попапе редактирования профиля имя и описание
  options.description.value = profileDescription.textContent;
  openPopup(options.element);
}

export function handleProfileImagePopup(options) {
  options.image.src = options.src; // заполняю в попапе ссылку на изображение
  options.image.alt = options.caption;
  options.description.textContent = options.caption; // заполняю в попапе описание картинки
  openPopup(options.element);
}
