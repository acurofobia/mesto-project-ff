import { openPopup } from "./modal";

const popupTypeImage = document.querySelector(".popup_type_image");

export function handleImageClick(cardImage, cardCaption) {
  cardImage.addEventListener("click", () => {
    openPopup(popupTypeImage, {
      src: cardImage.src,
      caption: cardCaption.textContent,
    });
  });
}
