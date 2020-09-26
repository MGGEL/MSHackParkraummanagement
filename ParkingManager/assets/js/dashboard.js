require('../css/dashboard.scss');

document.addEventListener('DOMContentLoaded', function () {

    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.961437, lng: 7.625909},
        zoom: 14,
        mapTypeControl: false,
        streetViewControl: false,
        styles: getStyle()
    });

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let positions = [
        {lat: 51.959903, lng: 7.626327},
        {lat: 51.960167, lng: 7.623173},
        {lat: 51.962124, lng: 7.616864},
        {lat: 51.964546, lng: 7.616972},
        {lat: 51.965966, lng: 7.626799},
        {lat: 51.964525, lng: 7.632045},
        {lat: 51.963937, lng: 7.632206},
        {lat: 51.961137, lng: 7.630178},
        {lat: 51.960857, lng: 7.630092}
    ];

    let markers = positions.map(function(position, i) {
        return new google.maps.Marker({
            position: position,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

});

function getStyle() {
    return [
        {
            "featureType": "landscape.man_made",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "weight": 8
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "stylers": [
                {
                    "color": "#fcfcfc"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "color": "#eeff00"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        }
    ]
}