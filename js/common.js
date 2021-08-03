$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};





	$('.tiles-block').slick({
		// slidesToShow: 1,
		// slidesToScroll: 1,
		// centerMode: true,
		// focusOnSelect: false,
		arrows: false,
		dots: true,
		// centerPadding: '36%',
		variableWidth: true,
		swipeToSlide: true
	});
	$('.tiles-block').on('wheel', (function(e) {
		e.preventDefault();

		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	}));

	wow = new WOW({
		animateClass: "animated",
		offset: 0,
	});
	wow.init();



});
