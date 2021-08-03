$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('.navi-hamburger').click(function (event) {
		$('.nav-mobile').slideToggle({
			duration: 250,
			complete: function () {
				if ($(this).is(':visible'))
					$(this).css('display','flex');
			}
		});
		$(this).toggleClass('open');
		$('.admittance-desk').slideToggle('slow');
		event.stopPropagation();
		if($('.nav-mobile').hasClass('open')) {
			$('html').css('overflow','hidden');
			// $('#main-header').addClass('resize');
		}else {
			// $('#main-header').removeClass('resize');
			$('html').css('overflow', 'auto');
		}
	});



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


	$('.paroller').paroller({
		direction: 'horizontal',
		transition: 'transform 0.3s ease-out'
	});
	$('.paroller-upper').paroller({
		direction: 'horizontal',
		transition: 'transform 0.3s ease-out'
	});


	function initAcc(elem, option){
		document.addEventListener('click', function (e) {
			if (!e.target.matches(elem+' .a-btn')) return;
			else{
				if(!e.target.parentElement.classList.contains('active')){
					if(option==true){
						var elementList = document.querySelectorAll(elem+' .a-container');
						Array.prototype.forEach.call(elementList, function (e) {
							e.classList.remove('active');
						});
					}
					e.target.parentElement.classList.add('active');
				}else{
					e.target.parentElement.classList.remove('active');
				}
			}
		});
	}

	initAcc('.accordion.v1', true);



});
