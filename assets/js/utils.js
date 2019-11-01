// function for toggle button and another element
export const toggleLayer = (button, layer) => {
  console.log("here?");
  button.elButton.classList.toggle(button.class);
  layer.elLayer.classList.toggle(layer.class);
};
