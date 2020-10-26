// Initialize and add the map
function initMap() {
  const mallorca = { lat: 39.651704, lng: 2.961072 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: mallorca,
  });

  const beachFlag =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  var markers = [
    {
      coords: { lat: 39.31361, lng: 3.121398 },
      content:
        "<h2>Caló des Moro</h2><p>07650 Sant Antoni de Portmany, Illes Balears</p>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 39.349545, lng: 3.185803 },
      content:
        "<h2>Playa de S'Amarador</h2><p>Carrer B M, 6, 07690 Santanyí</p>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 39.720876, lng: 3.454833 },
      content:
        "<h2>Cala Agulla</h2><p>Carrer d'es Niu de s'Àguila, s/n, 07659 Cala Figuera</p>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 39.330299, lng: 3.146721 },
      content:
        "<h2>Cala Santanyí</h2><p>Carrer sa Costa d'en Nofre, 07659 Cala Santanyí</p>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 39.329965, lng: 3.171178 },
      content:
        "<h2>Restaurant L'Arcada</h2><p>Santanyí, Carrer Virgen del Carmen, 80, 07659 Cala Figuera</p>",
    },
    {
      coords: { lat: 39.751872, lng: 2.629103 },
      content:
        "<h2>Restaurant Mirador Na Foradada</h2><p>Ctra. de Valldemossa km. 65, 07179 Deià</p>",
    },
    {
      coords: { lat: 39.569088, lng: 2.646143 },
      content: "<h2>Ombu</h2><p>Passeig del Born, 5, 7, 07012 Palma</p>",
    },
    {
      coords: { lat: 39.570167, lng: 2.653738 },
      content:
        "<h2>Moltabarra Bar de Tapas</h2><p>Carrer del Pes de la Farina, 12, 07001 Palma</p>",
    },
    {
      coords: { lat: 39.376071, lng: 3.239441 },
      content:
        "<h2>Marimonte Watersports</h2><p>Calo d'es Coral s/n, Urbanisacion Cala Esmeralda @ Hotel Esmeralda Park, 07660 Cala D'or</p>",
    },
    {
      coords: { lat: 39.567618, lng: 2.629953 },
      content:
        "<h2>OASIS CATAMARAN</h2><p>Av. de Gabriel Roca, 16, 07014 Palma</p>",
    },
    {
      coords: { lat: 39.633736, lng: 2.486414 },
      content: "<h2>Puig de Galatzó</h2><p>07184, Illes Balears</p>",
    },
    {
      coords: { lat: 39.961451, lng: 3.212298 },
      content: "<h2>Lighthouse of Cap de Formentor</h2><p>07460 Pollenca</p>",
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
    ["Cala Agulla", 39.720876, 3.454833],
    ["Cala Santanyí", 39.330299, 3.146721],
    ["Restaurant L'Arcada", 39.329965, 3.171178],
    ["Restaurant Mirador Na Foradada", 39.751872, 2.629103],
    ["Ombu", 39.569088, 2.646143],
    ["Moltabarra Bar de Tapas", 39.570167, 2.653738],
    ["Marimonte Watersports", 39.376071, 3.239441],
    ["OASIS CATAMARAN", 39.567618, 2.629953],
    ["Puig de Galatzó", 39.633736, 2.486414],
    ["Lighthouse of Cap de Formentor", 39.961451, 3.212298],
  ];
}
