import { buildToggleMenu } from "./js/fullscreen-menu.js";
import { buildSwiper } from "./js/swiper.js";
import { buildMap } from "./js/map.js";
import { initEntries } from "./js/entries.js";

buildToggleMenu();

// Init js for swiper
buildSwiper();

// Init js for mapbox map
const mapEl = document.getElementById("map");

if (mapEl) {
  buildMap();
}

// Init js for project entries view switcher
const entriesEL = document.getElementById("entries");

if (entriesEL) initEntries(entriesEL);
