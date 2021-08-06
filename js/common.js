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



	// $('.tiles-block').slick({
	// 	// slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	// centerMode: true,
	// 	// focusOnSelect: false,
	// 	arrows: false,
	// 	dots: true,
	// 	// centerPadding: '36%',
	// 	variableWidth: true,
	// 	swipeToSlide: true
	// });
	// $('.tiles-block').on('wheel', (function(e) {
	// 	e.preventDefault();
	//
	// 	if (e.originalEvent.deltaY < 0) {
	// 		$(this).slick('slickNext');
	// 	} else {
	// 		$(this).slick('slickPrev');
	// 	}
	// }));

	function afterReveal (el) {
		el.addEventListener('animationend', function () {
			console.log('This runs once finished!');
			$('.hanging-coin').fadeIn();
		});
	}

	wow = new WOW({
		animateClass: "animated",
		offset: 0,
		callback: afterReveal
	});
	wow.init();


	$('.paroller').paroller({
		direction: 'horizontal',
		transition: 'transform 0.3s ease-out',
		factorXs: 0.1,
	});
	$('.paroller-upper').paroller({
		direction: 'horizontal',
		transition: 'transform 0.3s ease-out',
		factorXs: 0.1,
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

// using-perspective-and-transform/
// // ===========================================================

function animationTile(parent, children) {
	(function() {
		// Init
		var container = document.getElementById(parent),
				inner = document.getElementById(children);

		// Mouse
		var mouse = {
			_x: 0,
			_y: 0,
			x: 0,
			y: 0,
			updatePosition: function(event) {
				var e = event || window.event;
				this.x = e.clientX - this._x;
				this.y = (e.clientY - this._y) * -1;
			},
			setOrigin: function(e) {
				this._x = e.offsetLeft + Math.floor(e.offsetWidth / 1.5);
				this._y = e.offsetTop + Math.floor(e.offsetHeight / 1.5);
			},
			show: function() {
				return "(" + this.x + ", " + this.y + ")";
			}
		};

		// Track the mouse position relative to the center of the container.
		mouse.setOrigin(container);

		//----------------------------------------------------

		var counter = 0;
		var refreshRate = 10;
		var isTimeToUpdate = function() {
			return counter++ % refreshRate === 0;
		};

		//----------------------------------------------------

		var onMouseEnterHandler = function(event) {
			update(event);
		};

		var onMouseLeaveHandler = function() {
			inner.style = "";
		};

		var onMouseMoveHandler = function(event) {
			if (isTimeToUpdate()) {
				update(event);
			}
		};

		//----------------------------------------------------

		var update = function(event) {
			mouse.updatePosition(event);
			updateTransformStyle(
					(mouse.y / inner.offsetHeight / 2).toFixed(2),
					(mouse.x / inner.offsetWidth / 2).toFixed(2)
			);
		};

		var updateTransformStyle = function(x, y) {
			var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
			inner.style.transform = style;
			inner.style.webkitTransform = style;
			inner.style.mozTranform = style;
			inner.style.msTransform = style;
			inner.style.oTransform = style;
		};

		//--------------------------------------------------------

		container.onmousemove = onMouseMoveHandler;
		container.onmouseleave = onMouseLeaveHandler;
		container.onmouseenter = onMouseEnterHandler;
	})();
}

animationTile('tile', 'tile-body');
animationTile('tile2', 'tile-body2');
animationTile('tile3', 'tile-body3');
animationTile('tile4', 'tile-body4');

