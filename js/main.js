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
	$('body, html').animate({scrollTop: 0}, 900);
};

// Logo Hover
$('.logo').mouseenter(function() {
	$('.home').fadeIn(1500);
});
$('.logo').mouseleave(function() {
	$('.home').fadeOut(1500);
});

//Snap to each pages
var FAST_SCROLL = 600

$('#main-nav ul li').click(mainNavClicked);
function mainNavClicked() {
	event. preventDefault();
	// console.log('mainNavClicked');
	var targetId = $(this).find('a').attr('data-target-id');
	// console.log(targetId);
	var targetY = $('#' + targetId).offset().top;
	$('body, html').animate({scrollTop: targetY}, FAST_SCROLL);
};

$(window).load(function() {
    	$('#slider, #slider2,#slider3, #slider4, #slider5, #slider6').nivoSlider();
	});

$('#slider, #slider2, #slider3, #slider4, #slider5, #slider6').nivoSlider({
    effect: 'fade',               // Specify sets like: 'fold,fade,sliceDown'
    animSpeed: 500,                 // Slide transition speed
    pauseTime: 3000,                // How long each slide will show
    startSlide: 0,                  // Set starting Slide (0 index)
    directionNav: true,             // Next & Prev navigation
    controlNav: false,               // 1,2,3... navigation
    controlNavThumbs: false,        // Use thumbnails for Control Nav
    pauseOnHover: true,             // Stop animation while hovering
    manualAdvance: false,           // Force manual transitions
    prevText: '<',               // Prev directionNav text
    nextText: '>',               // Next directionNav text
    randomStart: false,             // Start on a random slide
    beforeChange: function(){},     // Triggers before a slide transition
    afterChange: function(){},      // Triggers after a slide transition
    slideshowEnd: function(){},     // Triggers after all slides have been shown
    lastSlide: function(){},        // Triggers when last slide is shown
    afterLoad: function(){}         // Triggers when slider has loaded
});
