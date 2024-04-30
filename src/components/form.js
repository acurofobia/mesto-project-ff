import { closePopup, openPopup } from "./modal";
import { cardList } from "../index";
import { addCard } from "./card";
import { deleteCard } from "./card";

export const formElement = document.querySelectorAll(".popup__form");
const nameInput = formElement[0].querySelector(".popup__input_type_name");
const jobInput = formElement[0].querySelector(".popup__input_type_description");
const cardNameInput = formElement[1].querySelector(
  ".popup__input_type_card-name"
);
const cardLinkInput = formElement[1].querySelector(".popup__input_type_url");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

export function handleFormSubmit(evt) {
  if (evt.target.getAttribute("name") === "edit-profile") {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(evt);
  }
  if (evt.target.getAttribute("name") === "new-place") {
    evt.preventDefault();
    let cardValue = { name: cardNameInput.value, link: cardLinkInput.value };
    cardList.prepend(addCard(cardValue, deleteCard, openPopup));
    closePopup(evt);
  }
}
