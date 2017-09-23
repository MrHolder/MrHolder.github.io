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
        initAccordion('.question__item', '.question__more', '.question__item-text');
    })($);



    //попап
    $('.btn').click(function() {
        $('.popup, .overlay').fadeIn(500);
    });
    $('.popup__exit').click(function() {
        $('.popup, .overlay').fadeOut(200);
    });
    $('.overlay').click(function() {
        $('.popup, .overlay').fadeOut(200);
    });
    ymaps.ready(init);


});

function init() {
    var myMap, myPlacemark;
    myMap = new ymaps.Map("myMap", {
        //Координаты центра
        center: map.center,
        zoom: 17
    });

    //Координаты метки
    myPlacemark = new ymaps.Placemark(map.placemark, {}, {
        preset: "islands#redStretchyIcon",
    });
    myMap.geoObjects.add(myPlacemark);
}