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
        {lat: 51.960857, lng: 7.630092},
        {lat: 51.949955, lng: 7.636715},
        {lat: 51.970162, lng: 7.622208},
        {lat: 51.970418, lng: 7.623847},
        {lat: 51.969843, lng: 7.623997},
        {lat: 51.969763, lng: 7.620070},
        {lat: 51.970050, lng: 7.617313},
        {lat: 51.961906, lng: 7.616402},
        {lat: 51.952240, lng: 7.614321},
        {lat: 51.947175, lng: 7.622110},
        {lat: 51.942784, lng: 7.629126},
        {lat: 51.938980, lng: 7.616917},
        {lat: 51.930540, lng: 7.631980},
        {lat: 51.939007, lng: 7.657284},
        {lat: 51.950885, lng: 7.669987},
        {lat: 51.981081, lng: 7.676725},
        {lat: 51.965747, lng: 7.653293},
        {lat: 51.951105, lng: 7.637412}
    ];

    let markers = positions.map(function(position, i) {
        return new google.maps.Marker({
            position: position,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    let $workload = $('#workload');
    let count = 0;
    window.setInterval(function () {
        let number = parseInt($workload.html());

        if (count !== 0) {
            if (count % 5 === 0) {
                number-= 1;
            }

            if (count % 8 === 0) {
                number+= 2;
            }

            if (count % 3 === 0) {
                number+= 1;
            }
        }

        if (number > 100) {
            number = 95;
        }

        if (number <= 0) {
            number = 10;
        }

        $workload.html(number);

        count++;
    }, 1500);

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
