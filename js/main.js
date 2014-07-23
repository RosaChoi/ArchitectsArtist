//Main Header - color changes as scroll position changes
$(document).ready(function () {
	var scroll_pos = 0;
	var color = "white";
	var servicesY = $('#services').offset().top;
	var artistY= $('#artist').offset().top;

	$(document).scroll(function() {
		scroll_pos = $(this).scrollTop();

		if (scroll_pos > servicesY && scroll_pos < artistY) {
			$('.home, .header a, .underline a').css({"color":"#000"});
			$('.underline a').css({"border-bottom": "1px solid #000"});
			$('.logo').attr("src","img/logo-black.svg");
		}
		else {
			$('.home, .header a, .underline a').css({"color":"#ffffff"});
			$('.underline a').css({"border-bottom": "1px solid #ffffff"});
			$('.logo').attr("src","img/logo-white.svg");
		}
	});
});

//ScrollTop - home
$('.logo').click(logoClicked);
function logoClicked() {
	event.preventDefault();
	console.log(logoClicked);
	$('body').animate({scrollTop: 0}, 900);
};