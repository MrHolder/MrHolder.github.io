$(document).ready(function () {
    $('.catalog__tab--classic').click(function () {
        $(this).next('.more__classic').addClass('more--visible');
        $('.more__medium').addClass('more--none');
        $('.more__sport').addClass('more--none');
        $('.more__medium').removeClass('more--visible');
        $('.more__sport').removeClass('more--visible');
        $('.catalog__tab--classic').addClass('tabs__color--active');
        $('.catalog__tab--medium').removeClass('tabs__color--active');
        $('.catalog__tab--sport').removeClass('tabs__color--active');
        $('.catalog__tab--medium').addClass('tabs__color--none');
        $('.catalog__tab--sport').addClass('tabs__color--none');

        return false;
    });
    $('.catalog__tab--medium').click(function () {
        $(this).next('.more__medium').addClass('more--visible');
        $('.more__classic').addClass('more--none');
        $('.more__sport').addClass('more--none');
        $('.more__sport').removeClass('more--visible');
        $('.more__classic').removeClass('more--visible');
        $('.catalog__tab--medium').addClass('tabs__color--active');
        $('.catalog__tab--classic').removeClass('tabs__color--active');
        $('.catalog__tab--sport').removeClass('tabs__color--active');
        $('.catalog__tab--classic').addClass('tabs__color--none');
        $('.catalog__tab--sport').addClass('tabs__color--none');
        return false;
    });
    $('.catalog__tab--sport').click(function () {
        $(this).next('.more__sport').addClass('more--visible');
        $('.more__medium').addClass('more--none');
        $('.more__classic').addClass('more--none');
        $('.more__medium').removeClass('more--visible');
        $('.more__classic').removeClass('more--visible');
        $('.catalog__tab--sport').addClass('tabs__color--active');
        $('.catalog__tab--medium').removeClass('tabs__color--active');
        $('.catalog__tab--classic').removeClass('tabs__color--active');
        $('.catalog__tab--medium').addClass('tabs__color--none');
        $('.catalog__tab--classic').addClass('tabs__color--none');
        return false;
    });
    $(".link_a").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    $('.btn-1').click(function () {
        $('.popup-1, .overlay').fadeIn(500);


    });
    $('.btn-2').click(function () {
        $('.popup-2, .overlay').fadeIn(500);

    });
    $('.btn-3').click(function () {
        $('.popup-3, .overlay').fadeIn(500);
        $('.more--mod').fadeOut(300);
    });
    $('.btn-4').click(function () {
        $('.popup-4, .overlay').fadeIn(500);
        $('.more--mod').fadeOut(300);

    });
    $('.btn-5').click(function () {
        $('.popup-5, .overlay').fadeIn(500);
        $('.more--mod').fadeOut(300);

    });
    $('.btn-more1').click(function () {
        $('.popup-more1, .overlay').fadeIn(500);

    });
    $('.btn-more2').click(function () {
        $('.popup-more2, .overlay').fadeIn(500);

    });
    $('.btn-more3').click(function () {
        $('.popup-more3, .overlay').fadeIn(500);

    });
    $('.popup__exit').click(function () {
        $('.dispatch, .overlay').fadeOut(200);
    });
    $('.popup__exit2').click(function () {
        $('.more--mod, .overlay').fadeOut(200);
    });
    $('.overlay').click(function () {
        $('.more--mod, .overlay').fadeOut(200);
        $('.dispatch, .overlay').fadeOut(200);
    });

    $('input,textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });



    $(".form__data1").submit(function () {

        var name1 = $('#name1').val();
        var email1 = $('#email1').val();
        var phone1 = $('#phone1').val();
        var text1 = $('#text1').val();

        if ((name1.length === 0) || (email1.length === 0) || (phone1.length === 0) || (text1.length === 0)) {
            alert('Заполните все поля');
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "send1.php",
                data: $(this).serialize(),
                success: function () {
                    window.location.href = "http://merafence.com/thanks.html";
                }
            });
            return false;
        }
    });
    $(".form__data2").submit(function () {

        var name2 = $('#name2').val();
        var email2 = $('#email2').val();
        var phone2 = $('#phone2').val();
        var text2 = $('#text2').val();

        if ((name2.length === 0) || (email2.length === 0) || (phone2.length === 0) || (text2.length === 0)) {
            alert('Заполните все поля');
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "send2.php",
                data: $(this).serialize(),
                success: function () {
                    window.location.href = "http://merafence.com/thanks.html";
                }
            });
            return false;
        }
    });
    $(".form__data3").submit(function () {

        var name3 = $('#name3').val();
        var email3 = $('#email3').val();
        var phone3 = $('#phone3').val();
        var text3 = $('#text3').val();

        if ((name3.length === 0) || (email3.length === 0) || (phone3.length === 0) || (text3.length === 0)) {
            alert('Заполните все поля');
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "send3.php",
                data: $(this).serialize(),
                success: function () {
                    window.location.href = "http://merafence.com/thanks.html";
                }
            });
            return false;
        }
    });
    $(".form__data4").submit(function () {

        var name4 = $('#name4').val();
        var email4 = $('#email4').val();
        var phone4 = $('#phone4').val();
        var text4 = $('#text4').val();

        if ((name4.length === 0) || (email4.length === 0) || (phone4.length === 0) || (text4.length === 0)) {
            alert('Заполните все поля');
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "send4.php",
                data: $(this).serialize(),
                success: function () {
                    window.location.href = "http://merafence.com/thanks.html";
                }
            });
            return false;
        }
    });
    $(".form__data5").submit(function () {

        var name5 = $('#name5').val();
        var email5 = $('#email5').val();
        var phone5 = $('#phone5').val();
        var text5 = $('#text5').val();

        if ((name5.length === 0) || (email5.length === 0) || (phone5.length === 0) || (text5.length === 0)) {
            alert('Заполните все поля');
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "send5.php",
                data: $(this).serialize(),
                success: function () {
                    window.location.href = "http://merafence.com/thanks.html";
                }
            });
            return false;
        }
    });

    jQuery(function ($) {
        $.mask.definitions['~'] = '[+-]';
        $('#phone1').mask('+38(111) 111-11-11');
        $('#phone2').mask('+38(111) 111-11-11');
        $('#phone3').mask('+38(111) 111-11-11');
        $('#phone4').mask('+38(111) 111-11-11');
        $('#phone5').mask('+38(111) 111-11-11');
    });

});
