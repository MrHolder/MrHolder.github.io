$(document).ready(function() {
    // Слайдер - Результаты процедур
    $('.uncycle').slick({
        infinite: false,
        speed: 350,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        responsive: [{
            breakpoint: 1190,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // Cлайдер - отзывы
    $('.center').slick({
        speed: 350,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // Cлайдер - галерея
    $('.gallery--slider').slick({
        speed: 350,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1190,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // accordion
    (function() {
        var initAccordion = function(itemsClass, headerClass, bodyClass) {
            var $items = $(itemsClass);

            $items.find(headerClass).on('click', function() {
                $item = $(this).parent();
                $items.not($item).removeClass('open');
                $items.not($item).find(headerClass).removeClass('open');
                $items.not($item).find(bodyClass).slideUp(250);


                if ($(this).hasClass('open')) {
                    $item.removeClass('open');
                    $(this).removeClass('open');
                    $(this).siblings(bodyClass).slideUp(250);

                } else {
                    $item.addClass('open');
                    $(this).addClass('open');
                    $(this).siblings(bodyClass).slideDown(250);

                }
            });
        };
        initAccordion('.question__item', '.question__body', '.question__item-text');
    })($);



    //попап
    $('.btn').click(function() {
        $('.popup1, .overlay').fadeIn(500);
    });
    $('.popup__exit, .btnClose').click(function() {
        $('.popup1, .overlay').fadeOut(200);
    });
    $('.overlay').click(function() {
        $('.popup1, .overlay').fadeOut(200);
    });
    //попап 2
    $('.btn2').click(function() {
        $('.popup3, .overlay').fadeIn(500);
    });
    $('.popup__exit, .btnClose').click(function() {
        $('.popup3, .overlay').fadeOut(200);
    });
    $('.overlay').click(function() {
        $('.popup3, .overlay').fadeOut(200);
    });
    //попап 3
    $('.btn2').click(function() {
        $('.popup2, .overlay').fadeIn(500);
    });
    $('.popup__exit, .btnClose').click(function() {
        $('.popup2, .overlay').fadeOut(200);
    });
    $('.overlay').click(function() {
        $('.popup2, .overlay').fadeOut(200);
    });
    $(function() {
        if (location.hash == '#phx') {
            $('.popup2, .overlay').fadeIn(500);
            setTimeout(function() {
                $('.popup__exit').click();
            }, 3000);
        }
    });
    jQuery(function($) {
        $.mask.definitions['~'] = '[+-]';
        $('input[name="phone"]').mask("+7 (999)-999-99-99");
    });


    //Видео отзывы
    $('.btn-4').click(function() {
        var popupVideoIframe = $('.popup__video1 .popup__video-body');

        $(popupVideoIframe).attr('src', $(popupVideoIframe).data('src'));
        $('.popup__video1, .overlay').fadeIn(500);
    });

    $('.overlay').click(function() {
        $('.popup__video, .overlay').fadeOut(200);
        $('.popup__video .popup__video-body').attr('src', '');

    });
    $(document).on('keyup', function(event) {
        if (event.keyCode === 27 && $('.overlay').is(':visible')) {
            $('.popup__video, .overlay').fadeOut(200);
            $('.popup__video .popup__video-body').attr('src', '');
        }
    });

    ymaps.ready(init);


});

function init() {
    var myMap, myPlacemark;
    myMap = new ymaps.Map("myMap", {
        //Координаты центра
        center: map.center,
        zoom: 15
    });

    //Координаты метки
    myPlacemark = new ymaps.Placemark(map.placemark, {}, {
        preset: "islands#redStretchyIcon",
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('drag');
    myMap.behaviors.disable('scrollZoom');
}