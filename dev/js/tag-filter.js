export const initTagFilters = mainEl => {
  // const toggleButton = (params) => {

  // }

  // What is data structure?

  // const appStructure = {
  //     filters: [
  //         "Blue", "Green", "Red"
  //     ],
  //     entries: [
  //         {
  //             name: "Project 1"
  //             tags: ["Blue", "Green"]
  //         },
  //         {
  //             name: "Project 2"
  //             tags: ["Green", "Red"]
  //         },

  //         {
  //             name: "Project 2"
  //             tags: ["Red", "Blue"]
  //         },
  //     ]
  // }

  const btnEls = Array.from(mainEl.querySelectorAll(".btn-filter"));

  btnEls.forEach(el => {
    const value = el.getAttribute("data-tag");

    el.addEventListener("click", () => {
      el.classList.toggle("bg-gray-300");
      mainEl.classList.toggle(value);
    });
  });
};
