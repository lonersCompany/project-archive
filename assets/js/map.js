import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export const buildMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibG9uZXJzY29tcGFueSIsImEiOiJjandqNTlsYXIwNjduNDRwNjhkemhhZXVtIn0.c2PlH4OqBZUOQgDM4hg7fw";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11"
  });
};
