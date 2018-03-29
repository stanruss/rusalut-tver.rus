// $(document).ready(function() {

// 	$(".toggle-mnu").click(function() {
// 		$(this).toggleClass("on");
// 		$(".main-mnu").slideToggle();
// 		return false;
// 	});

// 	$(".main-footer .toggle-mnu").click(function() {
// 		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
// 		return false;
// 	});

// 	$(".top").click(function() {
// 		$("html, body").animate({ scrollTop: 0 }, "slow");
// 		return false;
// 	});

// 	$(".arrow-bottom").click(function() {
// 		$("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
// 		return false;
// 	});

// 	$(".section_1 .section-content .info-item").equalHeights();
// 	$(".section_3 .section-content .info-item").equalHeights();
// 	$(".s1-bottom .info-item").equalHeights();
// 	$(".s2-item").equalHeights();
// 	$(".s2-item .img-wrap").equalHeights();

// 	$(".section_4").waypoint(function() {

// 		$(".section_4 .card").each(function(index) {
// 			var ths = $(this);
// 			setInterval(function() {
// 				ths.removeClass("card-off").addClass("card-on");
// 			}, 200*index);
// 		});

// 	}, {
// 		offset : "20%"
// 	});

// 	var waypointsvg = new Waypoint({

// 		element: $(".section_5"),
// 		handler: function(dir) {
			
// 			if (dir === "down") {

// 				$(".section_5 .tc-item").each(function(index) {
// 					var ths = $(this);
// 					setTimeout(function() {
// 						var myAnimation = new DrawFillSVG({
// 							elementId: "tc-svg-" + index
// 						});
// 						ths.children(".tc-content").addClass("tc-content-on");
// 					}, 500*index);
// 				});

// 			};
// 			this.destroy();
// 		},
// 		offset: '35%'
// 	});

// 	$(".section_6").waypoint(function() {

// 		$(".section_6 .team").each(function(index) {
// 			var ths = $(this);
// 			setInterval(function() {
// 				ths.removeClass("team-off").addClass("team-on");
// 			}, 200*index);
// 		});

// 	}, {
// 		offset : "35%"
// 	});

// 	$(".slider").owlCarousel({
// 		items : 1,
// 		nav : true,
// 		navText : "",
// 		loop : true,
// 		autoplay : true,
// 		autoplayHoverPause : true,
// 		fluidSpeed : 600,
// 		autoplaySpeed : 600,
// 		navSpeed : 600,
// 		dotsSpeed : 600,
// 		dragEndSpeed : 600
// 	});

	$(".answer img").animated("fadeIn");
	$(".answer button").animated("zoomInUp");
// 	$(".slider .slide").animated("fadeIn");
// 	$(".homesect.section_8 .forms").animated("fadeInRight");
// 	$(".homesect.section_8 .p").animated("fadeIn");

// 	$(".section_2").waypoint(function() {
// 		$(".s2-item-wrap").each(function(index) {
// 			var ths = $(this);
// 			setInterval(function() {
// 				ths.addClass("on");
// 			}, 200*index);
// 		});
// 	}, {
// 		offset : "30%"
// 	});

// 	$(".section_8").waypoint(function() {
// 		$(".s8-item").each(function(index) {
// 			var ths = $(this);
// 			setInterval(function() {
// 				ths.addClass("on");
// 			}, 200*index);
// 		});
// 	}, {
// 		offset : "30%"
// 	});


// 	//Цели для Яндекс.Метрики и Google Analytics
// 	$(".count_element").on("click", (function() {
// 		ga("send", "event", "goal", "goal");
// 		yaCounterXXXXXXXX.reachGoal("goal");
// 		return true;
// 	}));

// 	//SVG Fallback
// 	if(!Modernizr.svg) {
// 		$("img[src*='svg']").attr("src", function() {
// 			return $(this).attr("src").replace(".svg", ".png");
// 		});
// 	};

// 	$(".homesect .section-bottom .buttons").click(function() {
// 		$("#callback h4").html($(this).text());
// 		$("#callback input[name=formname]").val($(this).text());
// 	}).magnificPopup({
// 		type:"inline",
// 		mainClass: 'mfp-forms'
// 	});

// 	//Аякс отправка форм
// 	//Документация: http://api.jquery.com/jquery.ajax/
// 	$(".forms").submit(function() {
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			alert("Спасибо за заявку!");
// 			setTimeout(function() {
// 				$.magnificPopup.close();
// 				$(".forms").trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

// 	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

// });
var scroll = new SmoothScroll('a[href*="#"]');
// $(window).scroll(function() {
// 	if($(window).scrollTop()>200) {
// 		$('.fixed-top').addClass('menu-bg');
// }else{
// 	$('.fixed-top').removeClass('menu-bg');
// }});

// $( ".navbar-nav button").click(function(){
//  $('#navbarSupportedContent').removeClass('show');
//  $('.navbar-toggler').addClass('collapsed');
// });

// $( ".nav-link").click(function(){
//  $('#navbarSupportedContent').removeClass('show');
//  $('.navbar-toggler').addClass('collapsed');
// });

// $('body').scrollspy({ target: '#navbar' })
// $('[data-spy="scroll"]').each(function () {
//   var $spy = $(this).scrollspy('refresh')
// })
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

// YOUTUBE VIDEO CODE
$(document).ready(function(){
    
// BOOTSTRAP 3.0 - Open YouTube Video Dynamicaly in Modal Window
// Modal Window for dynamically opening videos
$('a[href^="https://www.youtube.com"]').on('click', function(e){
  // Store the query string variables and values
    // Uses "jQuery Query Parser" plugin, to allow for various URL formats (could have extra parameters)
    var queryString = $(this).attr('href').slice( $(this).attr('href').indexOf('?') + 1);
    var queryVars = $.parseQuery( queryString );
 
    // if GET variable "v" exists. This is the Youtube Video ID
    if ( 'v' in queryVars )
    {
        // Prevent opening of external page
        e.preventDefault();
 
        // Variables for iFrame code. Width and height from data attributes, else use default.
        var vidWidth = 560; // default
        var vidHeight = 315; // default
        if ( $(this).attr('data-width') ) { vidWidth = parseInt($(this).attr('data-width')); }
        if ( $(this).attr('data-height') ) { vidHeight =  parseInt($(this).attr('data-height')); }
        var iFrameCode = '<iframe width="' + vidWidth + '" height="'+ vidHeight +'" scrolling="no" allowtransparency="true" allowfullscreen="true" src="https://www.youtube.com/embed/'+  queryVars['v'] +'?rel=0&wmode=transparent&showinfo=0" frameborder="0"></iframe>';
 
        // Replace Modal HTML with iFrame Embed
        $('#mediaModal .modal-body').html(iFrameCode);
        // Set new width of modal window, based on dynamic video content
        $('#mediaModal').on('show.bs.modal', function () {
            // Add video width to left and right padding, to get new width of modal window
            var modalBody = $(this).find('.modal-body');
            var modalDialog = $(this).find('.modal-dialog');
            var newModalWidth = vidWidth + parseInt(modalBody.css("padding-left")) + parseInt(modalBody.css("padding-right"));
            newModalWidth += parseInt(modalDialog.css("padding-left")) + parseInt(modalDialog.css("padding-right"));
            newModalWidth += 'px';
            // Set width of modal (Bootstrap 3.0)
            $(this).find('.modal-dialog').css('width', newModalWidth);
        });
 
        // Open Modal
        $('#mediaModal').modal();
    }
});
 
// Clear modal contents on close. 
// There was mention of videos that kept playing in the background.
$('#mediaModal').on('hidden.bs.modal', function () {
    $('#mediaModal .modal-body').html('');
});
 
}); 