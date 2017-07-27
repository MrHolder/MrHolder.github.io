$(document).ready(function() {
    // slider
    $('.single-item').slick({
        speed: 350,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear'
    });
    // scroll
    $(".link_a").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
    // form
    $('.btn-1').click(function() {
        $('.form__consultation').addClass('open');
    });
    $('.form__close').click(function() {
        $('.form__consultation').removeClass('open');
    });
    // header navigate
    $('.header__navigate').click(function() {
        $('.header__navigate-line--1').toggleClass('open');
        $('.header__navigate-line--2').toggleClass('open');
        $('.navigate').toggleClass('open');
    });

    initMap();


});
// map
var map, infoBubble, infoBubble2;

function initMap() {
    var myLatlng = new google.maps.LatLng(47.2217418, 39.7323504);
    var mapOptions = {
        backgroundColor: '#9d9d9d',
        zoom: 14,
        center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: {
            url: "assets/img/marker.png",
            scaledSize: new google.maps.Size(46, 46)
        }

    });

    google.maps.event.addListener(marker, 'click', function() {
        if (!infoBubble.isOpen()) {
            infoBubble.open(map, marker);
        }
    });

    var contentString = '<div id="content">' +
        '<p class="img1"></p>' +
        '<p class="phoneytext">ул. Петровская, 82 дом 23</p><br>' +
        '<p class="img2"></p>' +
        '<p class="phoneytext">+7(592) 023-92-95</p>' +

        '</div>';

    infoBubble = new InfoBubble({
        map: map,
        content: contentString,
        position: new google.maps.LatLng(-35, 151),
        shadowStyle: 1,
        padding: 0,
        backgroundColor: '#cd7f32',
        borderColor: '#cd7f32',
        disableAutoPan: true,
        hideCloseButton: true,
        arrowPosition: 30,
        backgroundClassName: 'phoney',
        arrowStyle: 2,
        Width: 300
    });

    infoBubble.open(map, marker);
    //





    //

    marker.setMap(map);
    var styles = [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        }
    ];

    map.setOptions({ styles: styles });
}