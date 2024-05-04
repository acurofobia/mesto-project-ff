const cardTemplate = document.querySelector("#card-template").content;

export function handleLikeClick(likeButton) {
  likeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like-button_is-active");
  });
}

export function addCard(cardValue, deleteCallback, options) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardCaption = cardElement.querySelector(".card__title");

  cardImage.setAttribute("src", cardValue.link);
  cardImage.setAttribute("alt", cardValue.name);
  cardElement.querySelector(".card__title").textContent = cardValue.name;
  deleteButton.addEventListener("click", () => deleteCallback(cardElement));

  options.handleImageClick(cardImage, cardCaption);

  options.handleLikeClick(likeButton);

  return cardElement;
}

export function deleteCard(card) {
  card.remove();
}
