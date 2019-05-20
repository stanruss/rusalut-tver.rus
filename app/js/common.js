$(document).ready(function() {
$('body').addClass('loaded')
});



	$(".answer img").animated("fadeIn");
	$(".answer button").animated("zoomInUp");

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


var scroll = new SmoothScroll('a[href*="#"]');
