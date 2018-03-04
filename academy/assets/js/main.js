$(document).ready(function() {
    // Акции
    var swiper = new Swiper('.event__slider', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // Продукты
    var swiper = new Swiper('.product__slider', {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            474: {
                slidesPerView: 1,
            },
            754: {
                slidesPerView: 2,
            },
            1210: {
                slidesPerView: 3,
            }
        }
    });
    // Отзывы
    var swiper = new Swiper('.reviews__slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            clickable: true,

        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            614: {
                slidesPerView: 1
            },
            754: {
                slidesPerView: 2,
            },
            1210: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }
    });
    // Карточка товара 
    const $gallery = $('.js-gallery');
    const $thumbs = $('.js-thumbs');
    const slideNumber = $gallery.find('.swiper-slide').length / 3;
    const slidesPerView = 3;
    let targetIndex;

    const activeSlideClass = 'active';
    let $thumbsActiveSlide;
    let $galleryActiveSlide;


    let swiperGallery = new Swiper($gallery, {
        direction: 'vertical',
        loop: true,
        loopAdditionalSlides: 0,
        initialSlide: slideNumber,
        speed: 700,
        simulateTouch: false,
        spaceBetween: 19,
        breakpoints: {
            474: {
                direction: 'horizontal',
            },
        }
    });

    let swiperThumbs = new Swiper($thumbs, {
        direction: 'vertical',
        loop: true,
        loopAdditionalSlides: 0,
        slidesPerView: slidesPerView,
        initialSlide: slideNumber,
        centeredSlides: false,
        slideToClickedSlide: true,
        speed: 500,
        spaceBetween: 19,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            474: {
                direction: 'horizontal',
                spaceBetween: 10,
            },
        }
    });

    //add custom active class for smooth animation
    $thumbsActiveSlide = $(swiperThumbs.slides).filter('.swiper-slide-active');
    $galleryActiveSlide = $(swiperGallery.slides).filter('.swiper-slide-active');
    $thumbsActiveSlide.addClass(activeSlideClass);
    $galleryActiveSlide.addClass(activeSlideClass);
    //---------------------------------------------


    swiperThumbs.on("slideChangeTransitionStart", function() {
        //add custom active class for smooth animation
        $thumbsActiveSlide = $(swiperThumbs.slides).filter('.swiper-slide-active');
        $thumbsActiveSlide.siblings().removeClass(activeSlideClass);
        //---------------------------------------------

        targetIndex = Number(swiperThumbs.realIndex);
        swiperThumbs.detachEvents();
        swiperGallery.slideTo(targetIndex + 1, 700, true);
    });

    // swiperThumbs.on("slideChangeTransitionEnd", function () {
    //   swiperThumbs.attachEvents();
    // });

    swiperGallery.on("slideChangeTransitionStart", function() {
        //add custom active class for smooth animation
        $galleryActiveSlide = $(swiperGallery.slides).filter('.swiper-slide-active');
        $galleryActiveSlide.siblings().removeClass(activeSlideClass);
        //---------------------------------------------
    });

    swiperGallery.on("slideChangeTransitionEnd", function() {
        if (targetIndex < slideNumber) {
            targetIndex += slideNumber;
            teleportTo(targetIndex);
        } else if (targetIndex >= slideNumber * 2) {
            targetIndex -= slideNumber;
            teleportTo(targetIndex);
        } else {
            //add custom active class for smooth animation
            $thumbsActiveSlide.addClass(activeSlideClass);
            $galleryActiveSlide.addClass(activeSlideClass);
            //---------------------------------------------
        }
        swiperThumbs.attachEvents();
    });

    function teleportTo(slideIndex) {
        swiperThumbs.slideTo(slideIndex + slidesPerView, 0, false);
        swiperGallery.slideTo(slideIndex + 1, 0, false);

        //add custom active class for smooth animation
        $thumbsActiveSlide = $(swiperThumbs.slides).filter('.swiper-slide-active');
        $galleryActiveSlide = $(swiperGallery.slides).filter('.swiper-slide-active');
        $thumbsActiveSlide.addClass(activeSlideClass);
        $galleryActiveSlide.addClass(activeSlideClass);
        //---------------------------------------------
    }
    // tabs
    $('.info__tab--first').addClass('is-show');
    $('.tab__info').addClass('is-show');
    $('.info__tab').click(function() {
        var openEl = $('.' + $(this).data('open'));

        $(openEl).siblings().removeClass('is-show');
        $(this).siblings().removeClass('is-show');
        $(this).addClass('is-show');
        $(openEl).addClass('is-show');

    });

    // Корзина
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    //Маска телефона
    jQuery(function($) {
        $.mask.definitions['~'] = '[+-]';
        $('input[name="phone"]').mask("+7 (111) - 111 - 11 - 11");
    });
    $('.callback-btn').click(function() {
        $('.callback, .overlay').fadeIn(500);
        return false;
    });
    $('.close__popup').click(function() {
        $('.callback, .overlay').fadeOut(200);
    });
    $('.overlay').click(function() {
        $('.callback, .overlay').fadeOut(200);
    });
    // рейтинг
    $('li').on('click', function() {
        var selectedCssClass = 'selected';
        var $this = $(this);
        $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
        $this
            .addClass(selectedCssClass)
            .parent().addClass('vote-cast');
    });
    // Навигация 
    var w = $(window).outerWidth();
    if (w <= 1024) {
        $('.nav__body-inner').click(function() {
            $(this).toggleClass('active');
            $(this).siblings().removeClass('active');

        });

        $('.not').click(function(event) {
            event.preventDefault();

        });
    }
    $('.nav__items-container-btn').click(function() {
        $(this).parent().toggleClass('active');
        // $(this).parent().parent().siblings().removeClass('active');
        return false;

    });
});