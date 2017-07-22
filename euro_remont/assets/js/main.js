$(document).ready(function() {
    $('.uncycle').slick({
        infinite: false,
        speed: 350,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    $(".link_a").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });



    $('.btn-1').click(function() {
        var popupVideoIframe = $('.popup__video1 .popup__video-body');

        $(popupVideoIframe).attr('src', $(popupVideoIframe).data('src'));
        $('.popup__video1, .overlay').fadeIn(500);

    });
    $('.btn-2').click(function() {
        var popupVideoIframe = $('.popup__video2 .popup__video-body');

        $(popupVideoIframe).attr('src', $(popupVideoIframe).data('src'));
        $('.popup__video2, .overlay').fadeIn(500);

    });
    $('.btn-3').click(function() {
        var popupVideoIframe = $('.popup__video3 .popup__video-body');

        $(popupVideoIframe).attr('src', $(popupVideoIframe).data('src'));
        $('.popup__video3, .overlay').fadeIn(500);

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


});