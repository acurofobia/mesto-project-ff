import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { addCard } from "./components/card.js";
import { deleteCard } from "./components/card.js";
import { openPopup } from "./components/modal.js";
import { handleFormSubmit } from "./components/form.js";

// @todo: DOM узлы
export const cardList = document.querySelector(".places__list");
const profileElement = document.querySelector(".profile");
const profileEditPopup = document.querySelector(".popup_type_edit");
const profileAddPopup = document.querySelector(".popup_type_new-card");
const profileEditPopupButton = profileElement.querySelector(
  ".profile__edit-button"
);
const profileAddPopupButton = profileElement.querySelector(
  ".profile__add-button"
);
const formEditProfile = document.forms["edit-profile"];
const formAddCard = document.forms["new-place"];

// @todo: Вывести карточки на страницу
initialCards.forEach((cardValue) => {
  const cardElement = addCard(cardValue, deleteCard, openPopup);
  cardList.append(cardElement);
});

profileEditPopupButton.addEventListener("click", () => {
  const nameAndJobList = [
    document.querySelector(".profile__title").textContent,
    document.querySelector(".profile__description").textContent,
  ];
  openPopup(profileEditPopup, { nameAndJobList });
});

profileAddPopupButton.addEventListener("click", () =>
  openPopup(profileAddPopup)
);

formEditProfile.addEventListener("submit", (evt) => {
  handleFormSubmit(evt, "editProfile");
});
formAddCard.addEventListener("submit", (evt) => {
  handleFormSubmit(evt, "addNewCard");
});
