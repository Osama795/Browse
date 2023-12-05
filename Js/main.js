$(function ()
{

// Header vh
$('.header').height($(window).height());

// header-listings vh
$('.header.header-pages').height($(window).height() - 150);

// Centering header-content
$('.header-content').css('paddingTop', ($(window).height() - $('.header-content').height()) / 3.5);


var scrollButton = $('#scroll-top');

$(window).scroll(function() {

	
	// Show & Hide Button Scroll

	if ($(this).scrollTop() >= 700) {

		scrollButton.show();

	} else {
		scrollButton.hide();
	}
	//$(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide(); // Short hand For [if Condition]

	// form fadeIn On Scroll
	$('.contact-us form').fadeIn(400);
	$('.contact-us .info-contact').fadeIn(1000);
	$('.contact-us .more-info').fadeIn(1000);


});

// Click On Button To Scroll Top
scrollButton.click(function(){
    $('html, body').animate({ scrollTop: 0 }, 600);
});


// Trigger Nice Scroll Plugin
$('html').niceScroll({
    cursorcolor: '#00918e',
    cursorwidth: '10px',
    cursorborder: 'none',
    cursorborderradius: 0
});

// Trigger range Slider


	$('input[type="range"]').rangeslider({
	polyfill : false,
	onInit : function() {
		this.output = $( '<div class="range-output" />' ).insertAfter( this.$range ).html( this.$element.val() );
	},
	onSlide : function( position, value ) {
		this.output.html( value );
	}
	});


	
// Trigger Typred

var typed = new Typed('.typed-words', {
	strings: ["Attractions"," Events"," Hotels", " Restaurants"],
	typeSpeed: 80,
	backSpeed: 80,
	backDelay: 4000,
	startDelay: 1000,
	loop: true,
	showCursor: true
	});



	 
}); // End Ready Funtion