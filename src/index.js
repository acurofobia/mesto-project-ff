import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import {
  deleteCard,
  addCard,
  handleImageClick,
  handleLikeClick,
} from "./components/card.js";
import {
  formEditProfile,
  formAddCard,
  handleCardFormSubmit,
  handleProfileFormSubmit,
} from "./components/form.js";
import { openPopup, handleProfileEditPopup } from "./components/modal.js";

export const cardList = document.querySelector(".places__list");
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
export let nameAndJobList = {
  title: document.querySelector(".profile__title").textContent,
  description: document.querySelector(".profile__description").textContent,
};

// @todo: Вывести карточки на страницу
initialCards.forEach((cardValue) => {
  const options = { handleImageClick, handleLikeClick };
  const cardElement = addCard(cardValue, deleteCard, options);
  cardList.append(cardElement);
});

profileEditPopupButton.addEventListener("click", () => {
  handleProfileEditPopup({
    nameAndJobList,
    name: profileEditPopupInputName,
    description: profileEditPopupInputDescription,
    element: profileEditPopup,
  });
});

profileAddPopupButton.addEventListener("click", () =>
  openPopup(profileAddPopup)
);

formEditProfile.addEventListener("submit", (evt) => {
  handleProfileFormSubmit(evt);
});
formAddCard.addEventListener("submit", (evt) => {
  handleCardFormSubmit(evt);
});
