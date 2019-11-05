import Swiper from "swiper";
import { cards, baseImage } from "./swiperParameters";

export const buildSwiper = params => {
  const swiperElements = Array.from(
    document.getElementsByClassName("swiper-container")
  );

  if (swiperElements.length > 0) {
    swiperElements.forEach(el => {
      const attribute = el.getAttribute("data-swiper");

      switch (attribute) {
        case "cards":
          new Swiper(el, cards);
          break;
        default:
          new Swiper(el, baseImage);
      }
    });
  }
};
