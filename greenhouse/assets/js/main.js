$(document).ready(function() {
    // scroll
    $(".link_a").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
    // slider
    $('.greenhouse__slider').slick({
        speed: 350,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear'
    });
    // Слайдер - оборудование для теплиц
    $('.equip__sliders').slick({
        infinite: false,
        speed: 350,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 1620,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }]
    });
    // Слайдер - наши проекты
    $('.project__sliders').slick({
        infinite: false,
        speed: 350,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 1320,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }]
    });
    // Cлайдер - галерея
    $('.gallery__sliders').slick({
        speed: 350,
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1620,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }]
    });
});