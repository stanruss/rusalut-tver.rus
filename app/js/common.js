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

var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;

$(function(){
    
    function updateAnchors() {
        anchors = [];
        $('.anchor').each(function(i, element){
            anchors.push( $(element).offset().top );
        });
    }
    
    $('body').on('mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        if( isAnimating ) {
            return false;
        }
        isAnimating  = true;
        // Increase or reset current anchor
        if( e.originalEvent.wheelDelta >= 0 ) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (anchors.length - 1) 
           || currentAnchor < 0 ) {
            currentAnchor = 0;
        }
        isAnimating  = true;
        $('html, body').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 500, 'swing', function(){
            isAnimating  = false;
        });
    });

    updateAnchors();   
    
});
(function($){var pl=/\+/g,searchStrict=/([^&=]+)=+([^&]*)/g,searchTolerant=/([^&=]+)=?([^&]*)/g,decode=function(s){return decodeURIComponent(s.replace(pl," "));};$.parseQuery=function(query,options){var match,o={},opts=options||{},search=opts.tolerant?searchTolerant:searchStrict;if('?'===query.substring(0,1)){query=query.substring(1);}while(match=search.exec(query)){o[decode(match[1])]=decode(match[2]);}return o;};$.getQuery=function(options){return $.parseQuery(window.location.search,options);};$.fn.parseQuery=function(options){return $.parseQuery($(this).serialize(),options);};}(jQuery));
