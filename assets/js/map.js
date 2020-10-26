// Initialize and add the map
function initMap() {
  // The location of Uluru
  const mallorca = { lat: 39.617909, lng: 2.978694 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: mallorca,
  });
  // The marker, positioned at Uluru
}
