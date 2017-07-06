$(document).ready(function () {
	$(".scroll__to").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
		$('.menu__burger').removeClass('is-show');
		$('.menu').removeClass('is-show');
		$('body').removeClass('is-fix');
		$('.header').removeClass('is-active');
	});
	$('.menu__burger').click(function () {
		$(this).toggleClass('is-show');
		$('.menu').toggleClass('is-show');
		$('body').toggleClass('is-fix');
		$('.header').toggleClass('is-active');
	});
	var w = $(window).width();
	if (w <= 900) {
		$('br').replaceWith(' ');
		return false;
	}
});
