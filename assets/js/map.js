// Initialize and add the map
function initMap() {
  const mallorca = { lat: 39.617909, lng: 2.978694 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: mallorca,
  });

  const beachFlag =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  var markers = [
    {
      coords: { lat: 39.31361, lng: 3.121398 },
      content: "<h2>Caló des Moro</h2>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 39.349545, lng: 3.185803 },
      content: "<h2>Playa de S'Amarador</h2>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 39.720876, lng: 3.454833 },
      content: "<h2>Calla Agulla</h2>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 39.330299, lng: 3.146721 },
      content: "<h2>Cala Santanyí</h2>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 39.329965, lng: 3.171178 },
      content: "<h2>Restaurant L'Arcada</h2>",
    },
    {
      coords: { lat: 39.751872, lng: 2.629103 },
      content: "<h2>Restaurant Mirador Na Foradada</h2>",
    },
    {
      coords: { lat: 39.569088, lng: 2.646143 },
      content: "<h2>Ombu</h2>",
    },
    {
      coords: { lat: 39.570167, lng: 2.653738 },
      content: "<h2>Moltabarra Bar de Tapas</h2>",
    },
    {
      coords: { lat: 39.376071, lng: 3.239441 },
      content: "<h2>Marimonte Watersports</h2>",
    },
    {
      coords: { lat: 39.567618, lng: 2.629953 },
      content: "<h2>OASIS CATAMARAN</h2>",
    },
    {
      coords: { lat: 39.633736, lng: 2.486414 },
      content: "<h2>Puig de Galatzó</h2>",
    },
    {
      coords: { lat: 39.961451, lng: 3.212298 },
      content: "<h2>Lighthouse of Cap de Formentor</h2>",
    },
  ];

  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    if (props.iconImage) {
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });
    }

    marker.addListener("click", function () {
      map.setZoom(12);
      infoWindow.open(map, marker);
    });

    map.addListener("click", function () {
      if (infoWindow) infoWindow.close();
    });
  }

  $(".choices-btn").click(function () {
    map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
    map.setZoom(13);
  });
  const locations = [
    ["Caló des Moro", 39.31361, 3.121398],
    ["Playa de S'Amarador", 39.349545, 3.185803],
    ["Calla Agulla", 39.720876, 3.454833],
    ["Cala Santanyí", 51.8503, -8.2943],
  ];
}
