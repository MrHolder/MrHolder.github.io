$(document).ready(function() {
    $('.single-item').slick({
        speed: 350,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear'
    });

    $(".link_a").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    $('.btn-1').click(function() {
        $('.form__consultation').addClass('open');
    });
    $('.header__navigate').click(function() {
        $('.header__navigate-line--1').toggleClass('open');
        $('.header__navigate-line--2').toggleClass('open');
        $('.navigate').toggleClass('open');

    });
});