const setCategory = (mainEl, btnEls, el) => {
  const value = el.getAttribute("data-tag");
  const attributesArr = btnEls.map(el => el.getAttribute("data-tag"));

  attributesArr.forEach(attribute => mainEl.classList.remove(attribute));
  btnEls.forEach(el => el.classList.remove("bg-gray-300"));

  el.classList.add("bg-gray-300");
  mainEl.classList.add(value);
};

const getUrlVars = () => {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
};

export const initTagFilters = mainEl => {
  const btnEls = Array.from(mainEl.querySelectorAll(".btn-filter"));

  btnEls.forEach(el => {
    el.addEventListener("click", () => {
      setCategory(mainEl, btnEls, el);
    });
  });

  // SET CATEGORY IF URL VARIABLE IS PAST
  const tagsPastInURL = getUrlVars();
  if (tagsPastInURL.category) {
    const el = btnEls.find(
      el => el.getAttribute("data-tag") == tagsPastInURL.category
    );
    setCategory(mainEl, btnEls, el);
  }
};
