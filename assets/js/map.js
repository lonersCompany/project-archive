import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

// UTIL FUNCTION
// Get Coordinates in array format
const getCoordinates = el => {
  const coordinatesLon = Number(el.getAttribute("data-lon"));
  const coordinatesLat = Number(el.getAttribute("data-lat"));
  return [coordinatesLon, coordinatesLat];
};

const createGeoJason = (el, index) => {
  // get mark coordinates
  const coordinates = getCoordinates(el);

  const completedObject = {
    index: index,
    geometry: {
      coordinates: coordinates
    }
  };
  return completedObject;
};

// geojson.forEach(marker => {
//   // create a DOM element for the marker
//   var el = document.createElement("div");
//   el.innerHTML = `A`;
//   el.className = "w-2 h-3 bg-gray-900";

//   var mapEntryObj = {
//     element: el,
//     index: marker.index + 1,

//     flyTo: {
//       coordinates: marker.geometry.coordinates,
//       zoom: 16.6,
//       speed: 1.5
//     }
//   };

//   // add marker to map
//   new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
// });

export const buildMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibG9uZXJzY29tcGFueSIsImEiOiJjandqNTlsYXIwNjduNDRwNjhkemhhZXVtIn0.c2PlH4OqBZUOQgDM4hg7fw";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/lonerscompany/ck2waac450nav1dtdnrizbfoi",
    center: [15.565441, 49.984897],
    zoom: 6
  });

  map.scrollZoom.disable();

  const locationEls = Array.from(
    document.getElementsByClassName("map-location")
  );

  const geojson = locationEls.map(createGeoJason);

  geojson.forEach(marker => {
    //addMapEvent(mapEntryObj);

    var el = document.createElement("div");
    el.className = "h-4 w-4 bg-blue-600 rounded-full";

    // add marker to map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
  });

  console.log(geojson);
};
