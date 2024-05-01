import { openPopup } from "./modal";
import { cardList } from "../index";
import { addCard } from "./card";
import { deleteCard } from "./card";
import { handlePopupClose } from "./handlePopupClose";

const formEditProfile = document.forms["edit-profile"];
const formAddCard = document.forms["new-place"];
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);
const cardNameInput = formAddCard.querySelector(".popup__input_type_card-name");
const cardLinkInput = formAddCard.querySelector(".popup__input_type_url");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

export function handleFormSubmit(evt, options) {
  if (options === "editProfile") {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    handlePopupClose(evt);
  }
  if (options === "addNewCard") {
    evt.preventDefault();
    const cardValue = { name: cardNameInput.value, link: cardLinkInput.value };
    cardList.prepend(addCard(cardValue, deleteCard, openPopup));
    evt.target.reset();
    handlePopupClose(evt);
  }
}
