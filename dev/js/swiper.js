import Swiper from "swiper";
import { cards, baseImage } from "./swiperParameters";

const toggleFullScreen = state => {
  const { sliderEl, slidesArr } = state;

  const zoomMode = sliderEl.getAttribute("zoom");

  switch (zoomMode) {
    case "false":
      sliderEl.setAttribute("zoom", "true");
      sliderEl.classList.add("absolute");
      sliderEl.classList.add("z-50");
      sliderEl.classList.add("inset-0");
      sliderEl.classList.add("bg-gray-900");
      slidesArr.forEach(el => {
        el.classList.add("h-full");
        el.classList.remove("max-h-70");
      });
      break;

    default:
      sliderEl.setAttribute("zoom", "false");
      sliderEl.classList.remove("z-50");
      sliderEl.classList.remove("absolute");
      sliderEl.classList.remove("inset-0");
      sliderEl.classList.remove("bg-gray-900");
      slidesArr.forEach(el => {
        el.classList.add("max-h-70");
        el.classList.remove("h-full");
      });
  }
};

const initFullScreen = sliderEl => {
  const slidesArr = Array.from(sliderEl.querySelectorAll("img"));

  const state = {
    sliderEl,
    slidesArr
  };

  slidesArr.forEach(el =>
    el.addEventListener("click", () => toggleFullScreen(state))
  );
};

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
          initFullScreen(el);
          new Swiper(el, baseImage);
      }
    });
  }
};
