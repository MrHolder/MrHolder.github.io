$(document).ready(function() {
    var w = $(window).outerWidth();
    if (w <= 1024) {
        $('.tab1').click(function() {
            $('.tab2').removeClass('active');
            $('.tab3').removeClass('active');
            $(this).toggleClass('active');
            return false;
        });
        $('.tab2').click(function() {
            $('.tab1').removeClass('active');
            $('.tab3').removeClass('active');
            $(this).toggleClass('active');
            return false;
        });
        $('.tab3').click(function() {
            $('.tab1').removeClass('active');
            $('.tab2').removeClass('active');
            $(this).toggleClass('active');
            return false;
        });
    }
});