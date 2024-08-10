import "./pages/index.css";
import { deleteCard, addCard } from "./components/card.js";
import {
  formEditProfile,
  formAddCard,
  handleCardFormSubmit,
  handleProfileFormSubmit,
  handleAvatarFormSubmit,
  profileTitle,
  profileDescription,
  profileImage,
  cardList,
  formChangeAvatar
} from "./components/form.js";
import { openPopup } from "./components/modal.js";
import { enableValidation } from "./components/validation.js";
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
const cardTemplate = document.querySelector("#card-template").content;
const popupTypeImage = document.querySelector(".popup_type_image");
const popupTypeImageMain = popupTypeImage.querySelector(".popup__image");
const popupTypeImageDescription =
  popupTypeImage.querySelector(".popup__caption");

const avatarChangeButton = document.querySelector(".overlay");

let userId = '';

function handleProfileImagePopup(options) {
  options.image.src = options.src; // заполняю в попапе ссылку на изображение
  options.image.alt = options.caption;
  options.description.textContent = options.caption; // заполняю в попапе описание картинки
  openPopup(options.element);
}

function renderCards(cardsData, userId) {
  cardsData.forEach((cardValue) => {
    const options = { userId, 
      handleProfileImagePopup: handleProfileImagePopup,
      cardTemplate: cardTemplate,
      popupTypeImage: popupTypeImage,
      popupTypeImageMain: popupTypeImageMain,
      popupTypeImageDescription: popupTypeImageDescription
    };
    const cardElement = addCard(cardValue, deleteCard, options);
    cardList.append(cardElement);
  })
};

function handleProfileEditPopup(options) {
  options.name.value = profileTitle.textContent; // заполняю в попапе редактирования профиля имя и описание
  options.description.value = profileDescription.textContent;
  openPopup(options.element);
}

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
});

avatarChangeButton.addEventListener("click", () => openPopup(profileChangeAvatarPopup));

profileAddPopupButton.addEventListener("click", () => openPopup(profileAddPopup));

formEditProfile.addEventListener("submit", handleProfileFormSubmit);

formAddCard.addEventListener("submit", (evt) => {
  const options = { userId, 
    handleProfileImagePopup: handleProfileImagePopup,
    cardTemplate: cardTemplate,
    popupTypeImage: popupTypeImage,
    popupTypeImageMain: popupTypeImageMain,
    popupTypeImageDescription: popupTypeImageDescription
  };
  handleCardFormSubmit(evt, options);
});

formChangeAvatar.addEventListener("submit", (evt) => {
  handleAvatarFormSubmit(evt);
});