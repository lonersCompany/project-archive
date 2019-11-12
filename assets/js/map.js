import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export const buildMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibG9uZXJzY29tcGFueSIsImEiOiJjandqNTlsYXIwNjduNDRwNjhkemhhZXVtIn0.c2PlH4OqBZUOQgDM4hg7fw";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/lonerscompany/ck2waac450nav1dtdnrizbfoi",
    center: [15.565441, 49.984897],
    zoom: 7,
    minZoom: 3,
    maxZoom: 18
  });
};
