$(document).ready(function () {
   $('.uncycle').slick({
        dots: false,
        infinite: false,
        speed: 500,
        
        arrows: true,
        
        slidesToShow: 1,

  slidesToScroll: 1
    });

   
   $(".link_a").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

   $('.btn-1').click(function () {
        $('.popup__video1, .overlay').fadeIn(500);


    });
   $('.btn-2').click(function () {
        $('.popup__video2, .overlay').fadeIn(500);


    });
   $('.btn-3').click(function () {
        $('.popup__video3, .overlay').fadeIn(500);


    });
   $('.overlay').click(function () {
        $('.popup__video, .overlay').fadeOut(200);
    });
});
