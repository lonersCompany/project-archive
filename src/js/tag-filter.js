const setCategory = (btn, state) => {
  if (state.activeEl) state.activeEl.classList.remove("bg-gray-400");
  if (state.value) state.mainEl.classList.remove(state.value);
  if (state.activeEl === btn) {
    state.activeEl = null;
    state.value = null;
    return;
  }

  const value = btn.getAttribute("data-tag");

  state.mainEl.classList.add(value);
  btn.classList.add("bg-gray-400");
  state.value = value;
  state.activeEl = btn;
};

const getUrlVars = () => {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
};

export const initTagFilters = (mainEl) => {
  const btnEls = Array.from(mainEl.querySelectorAll(".btn-filter"));

  const state = {
    activeEl: null,
    mainEl,
    btnEls,
  };

  btnEls.forEach((el) => {
    el.addEventListener("click", () => {
      setCategory(el, state);
    });
  });

  // SET CATEGORY AFTER REDIRECT
  const tagsPastInURL = getUrlVars();
  if (tagsPastInURL.category) {
    const el = btnEls.find(
      (el) => el.getAttribute("data-tag") == tagsPastInURL.category
    );
    setCategory(el, state);
  }
};
