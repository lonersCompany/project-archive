export const initTagFilters = mainEl => {
  const btnEls = Array.from(mainEl.querySelectorAll(".btn-filter"));
  const attributesArr = btnEls.map(el => el.getAttribute("data-tag"));

  btnEls.forEach(el => {
    const value = el.getAttribute("data-tag");

    el.addEventListener("click", () => {
      attributesArr.forEach(attribute => mainEl.classList.remove(attribute));
      btnEls.forEach(el => el.classList.remove("bg-gray-300"));

      el.classList.add("bg-gray-300");
      mainEl.classList.add(value);
    });
  });
};
