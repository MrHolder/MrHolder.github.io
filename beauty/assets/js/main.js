$(document).ready(function() {
    // Слайдер - Специалисты
    $('.expert__slider').slick({
        infinite: true,
        speed: 350,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
            breakpoint: 1120,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // Cлайдер - Результаты
    $('.result__slider').slick({
        infinite: true,
        speed: 350,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
            breakpoint: 980,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // Cлайдер - Отзывы
    $('.reviews__slider').slick({
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 20000,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // Cлайдер - Фото салона
    $('.photo__slider').slick({
        infinite: true,
        speed: 350,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 485,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //Навигация
    var w = $(window).outerWidth();
    if (w <= 1024) {
        $('.tab').click(function() {
            $(this).toggleClass('active');
        });
        $('.not').click(function(event) {
            event.preventDefault();

        });
    }
    //Форма (дата и время)
    $('.datepicker').pickadate({
        monthsFull: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
        weekdaysFull: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],

        format: 'dd, mmmm, yyyy',
        today: 'Сегодня',
        clear: 'Очистить',
        close: 'Закрыть',
        firstDay: 1,
        disable: [
            6, 7
        ],
        min: 1,
        max: false
    });
    $('.timepicker').pickatime({
        format: 'HH:i A',
        min: [7, 30],
        max: [18, 0],
        disable: [
            { from: [14, 0], to: [15, 00] }
        ],
        clear: 'Очистить'
    });
    //Маска телефона
    jQuery(function($) {
        $.mask.definitions['~'] = '[+-]';
        $('input[name="phone"]').mask("+7 (111)-111-11-11");
    });

    // Услуги скролл
    $(".link_a").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    $('.callback-btn').click(function() {
        $('.callback, .overlay').fadeIn(500);
    });
    $('.close__popup').click(function() {
        $('.callback, .overlay').fadeOut(200);
    });
    $('.overlay').click(function() {
        $('.callback, .overlay').fadeOut(200);
    });
    $('input,textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });



    $(".form__data1").submit(function() {

        var name1 = $('#name1').val();
        var phone1 = $('#phone1').val();

        if ((name1.length === 0) || (phone1.length === 0)) {
            alert('Заполните все поля');
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "send1.php",
                data: $(this).serialize(),
                success: function() {
                    window.location.href = "http://merafence.com/thanks.html";
                }
            });
            return false;
        }
    });

    ymaps.ready(init);


});

function init() {
    var myMap, myPlacemark;
    myMap = new ymaps.Map("myMap", {
        //Координаты центра
        center: map.center,
        zoom: 17,

    });

    //Координаты метки
    myPlacemark = new ymaps.Placemark(map.placemark, {}, {
        preset: 'islands#darkGreenStretchyIcon',
        iconSize: [42, 57], // размер иконки
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
        }
    }
    if (isMobile.any()) {
        myMap.behaviors.disable('drag')
    }
}