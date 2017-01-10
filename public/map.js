mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aWFubWluZ2xlcyIsImEiOiIzMjdlOTI2ODMwNDg4MWI1ZjdhZjE0MGE2ZjQ5NjQ5NiJ9.OAso8BqXVyQeMCxaX_6FMA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    pitch: 25,
    // bearing: -15.6,
    center: [121.487614, 31.2217468]
});

map.on('load', function() {
    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 7,
        'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'height'
            },
            'fill-extrusion-base': {
                'type': 'identity',
                'property': 'min_height'
            },
            'fill-extrusion-opacity': .6
        }
    });
});
