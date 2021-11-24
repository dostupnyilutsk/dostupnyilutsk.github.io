// initialize Leaflet
var map = L.map('map').setView([50.7498786, 25.3139648], 12);

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

// show a marker on the map
var brailfontIcon = L.icon({
    iconUrl: 'img/brailfont-icon.png',
    iconSize: [35, 40],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

function onEachFeature(feature, layer) {
    //var popupContent = "<p>Якщо є запитання <a href = 'https://e-dem.tools/6110100000'> перейдіть за посиланням</a></p>";
    var popupContent = "";
    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
};

L.geoJSON(fontBrail, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, { icon: brailfontIcon });
    }
}).addTo(map);
