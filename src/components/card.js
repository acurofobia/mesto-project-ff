import { removeCardFromPage, likeCard as likeCardApi, unlikeCard as unlikeCardApi } from "./api";
import { cardList } from "./form";
import { openPopup } from "./modal";

const cardTemplate = document.querySelector("#card-template").content;
const popupTypeImage = document.querySelector(".popup_type_image");
const popupTypeImageMain = popupTypeImage.querySelector(".popup__image");
const popupTypeImageDescription =
  popupTypeImage.querySelector(".popup__caption");

export function handleLikeClick(likeButton, cardValue, userId, likeCounter) {
  likeButton.addEventListener("click", (evt) => {
    const options = {cardId: cardValue._id, likeButton: likeButton, likeCounter: likeCounter, userId: userId};
    if (likeButton.classList.contains('card__like-button_is-active')) {
      unlikeCard(options);
    } else {
      likeCard(options);
    }
  });
}

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

function handleProfileImagePopup(options) {
  options.image.src = options.src; // заполняю в попапе ссылку на изображение
  options.image.alt = options.caption;
  options.description.textContent = options.caption; // заполняю в попапе описание картинки
  openPopup(options.element);
}

export const renderCards = (cardsData, userId) => {
  cardsData.forEach((cardValue) => {
    const options = { userId };
    const cardElement = addCard(cardValue, deleteCard, options);
    cardList.append(cardElement);
  })
};

export function likeCard(options) {
  likeCardApi(options.cardId)
    .then(data => updateCardLikes(options, data))
    .catch(err => console.error(`Ошибка: ${err}`));
}

export function unlikeCard(options) {
  unlikeCardApi(options.cardId)
    .then(data => updateCardLikes(options ,data))
    .catch(err => console.error(`Ошибка: ${err}`));
}

function updateCardLikes(options, data) {
  options.likeCounter.textContent = data.likes.length;

  if (data.likes.some(user => user._id === options.userId)) {
    options.likeButton.classList.add('card__like-button_is-active');
  } else {
    options.likeButton.classList.remove('card__like-button_is-active');
  }
}

export function addCard(cardValue, deleteCallback, options) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardCaption = cardElement.querySelector(".card__title");
  const likeCounter = cardElement.querySelector(".card__like-counter");

  cardImage.setAttribute("src", cardValue.link);
  cardImage.setAttribute("alt", cardValue.name);
  likeCounter.textContent = cardValue.likes.length;
  cardElement.querySelector(".card__title").textContent = cardValue.name;

  if(cardValue.likes.some((item) => {return item._id == options.userId})) {
    likeButton.classList.add("card__like-button_is-active");
  }
  
  if (options.userId == cardValue.owner._id) {
    deleteButton.addEventListener("click", () => deleteCallback(cardElement, cardValue._id));
  }else {
    deleteButton.style.display = 'none';
  }

  cardImage.addEventListener("click", () => {
    handleProfileImagePopup({
      element: popupTypeImage,
      src: cardImage.src,
      caption: cardCaption.textContent,
      image: popupTypeImageMain,
      description: popupTypeImageDescription,
    });
  });

  // handleImageClick(cardImage, cardCaption);

  handleLikeClick(likeButton, cardValue, options.userId, likeCounter);

  return cardElement;
}

export function deleteCard(card, cardId) {
  if (cardId) {
    removeCardFromPage(cardId)
      .catch(error => console.log(error))
  }
  card.remove();
}