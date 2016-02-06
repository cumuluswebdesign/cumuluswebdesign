// Side Pagination
var sectionNameHeight;

function sidePagination(sectionNameHeight) {

	// Inner Separation
	var separation = 1/6;

	// Current Heights
	var windowHeight = $(window).height();
	var numberHeight = $('.sidePagination .number').height();

	// Settings heights
	var innerHeight = windowHeight * separation;
	var outerHeight = ( windowHeight - numberHeight - sectionNameHeight - innerHeight ) / 2;
	$('.sidePagination .inner').css('height', innerHeight);
	$('.sidePagination .top').css('height', outerHeight - outerHeight*0.2);
	$('.sidePagination .bottom').css('height', outerHeight + outerHeight*0.2);
	$('.sidePagination .section-name').css('height', sectionNameHeight)
	$('.sidePagination .section-name h2').css('top', sectionNameHeight - 45);
}

// Transition Animations 

var easing = 'easeInOutCubic';

function afterLoad() {
	$('.sidePagination .top .border').slideDown(100, easing, function() {
		$('.sidePagination .inner .border').slideDown(50, easing, function(){
			$('.sidePagination .bottom .border').slideDown(100, easing);
		});
	});
    $('.sidePagination .section-name').fadeIn();
    $('.sidePagination .number').fadeIn();
}

function onLeave() {
	$('.sidePagination .bottom .border').slideUp(100, easing, function() {
		$('.sidePagination .inner .border').slideUp(50, easing, function(){
			$('.sidePagination .top .border').slideUp(100, easing);
		});
	});
	$('.sidePagination .section-name').fadeOut();
	$('.sidePagination .number').fadeOut();
}

// Retrigger layout formating when resizing

$(window).resize(function () {
    sidePagination(sectionNameHeight);
});
