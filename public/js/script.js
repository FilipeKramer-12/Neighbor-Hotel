// Slider Interna
new SimpleSlide({
    slide: 'area-interna',
    time: 3000,
});

// Slider Externa
new SimpleSlide({
    slide: 'area-externa',
    time: 3200,
});

// Maps
var initialCoordinates = [-23.6002764, -46.7255461];
var initialZoomLevel = 15;
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
  };

var map = L.map('map-area', options).setView(initialCoordinates, initialZoomLevel);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
}).addTo(map);

// Marker 
var muxiCoordinates = [-23.6042764, -46.7255461];
var muxiMarkerMessage = "<h2 class= 'h2-map'>Neighbor Hotel</h2> <img class='img-logo' src='./public/img/map-logo.svg'> <a class='a-map' href='tel:+55119876-5432'>Entre em contato : <br> +55 11 9876-5432</a>";

L.marker(muxiCoordinates)
    .addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

// Animação
new SimpleAnime();