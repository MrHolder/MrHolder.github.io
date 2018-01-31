$(document).ready(function() {
    $('.main__callback').click(function() {
        $('.form__popup, .overlay').fadeIn(500);
    });
    $('.popup__exit').click(function() {
        $('.form__popup, .overlay').fadeOut(200);
    });
    $('.popup__exit2').click(function() {
        $('.more--mod, .overlay').fadeOut(200);
    });
    $('.overlay').click(function() {
        $('.form__popup, .overlay').fadeOut(200);
    });


    jQuery(function($) {
        $.mask.definitions['~'] = '[+-]';
        $('#phone').mask('+38(111) 111-11-11');
        $('#phone2').mask('+38(111) 111-11-11');
    });

    initMap();
});


function initMap() {
    var uluru = { lat: 49.993403, lng: 36.232570 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: {
            url: "assets/img/marker.svg",
            scaledSize: new google.maps.Size(25, 40)
        }
    });

}