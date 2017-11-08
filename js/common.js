$(document).ready(function() {

	// SLICK SLIDER FOR PROGRAM-REVIEW

	$('.program-review__slider-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.program-review__slider-dots',
		responsive: [
			{
				breakpoint: 575,
				settings: {
					arrows: false,
					dots: true
				}
			}
		]
	});

	$('.program-review__slider-dots').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.program-review__slider-main',
		focusOnSelect: true,
		arrows: false
	});

	// FANCYBOX GALLERY

	$("[data-fancybox]").fancybox({
		buttons : [
			'close'
		],
		transitionEffect : "circular",
		transitionDuration : 700,
	});

	// CHANGE TEXT OF THE FOOTER LINK

	$('#collapseFooter').on('hide.bs.collapse', function () {
		$('.footer-link').text('более подробная информация');
		$('.footer-link').removeClass('top-arrow');
		$('.footer-link').addClass('bottom-arrow');
	})

	$('#collapseFooter').on('show.bs.collapse', function () {
		$('.footer-link').text('свернуть');
		$('.footer-link').removeClass('bottom-arrow');
		$('.footer-link').addClass('top-arrow');
		$('html, body').animate({scrollTop:$(document).height()}, '350');
	})

	// CHANGE TEXT OF THE FILTERS LINK

	$('#collapseFilters').on('hide.bs.collapse', function () {
		$('.close-text').addClass('d-none');
		$('.open-text').removeClass('d-none');

		$('.filters-section-link .plus').removeClass('open-filters');
		$('.filters-section-link').css("background-color", "#F0F5FA");
		$('.filters-link').css("color", "#497dbf");
	})

	$('#collapseFilters').on('show.bs.collapse', function () {
		$('.open-text').addClass('d-none');
		$('.close-text').removeClass('d-none');

		$('.filters-section-link .plus').addClass('open-filters');
		$('.filters-section-link').css("background-color", "#fff");
		$('.filters-link').css("color", "#808ea6");
	})

	// HAMBURGER MENU

	var hamburger = $('#hamburger-icon');
	hamburger.click(function() {
		hamburger.toggleClass('active');
	});

	// DISABLE SCROLL ON SELECT

	$('.selectpicker').selectpicker({
		size: 'integer'
	});

	// ADD SLIDEDOWN ANIMATION TO BOOTSTRAP DROPDOWN WHEN EXPANDING.
	$('.dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown('fast');
	});

	// ADD SLIDEUP ANIMATION TO BOOTSTRAP DROPDOWN WHEN COLLAPSING.
	$('.dropdown').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp('fast');
	});

	// BANNER SLIDER
	$('.banner-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: false,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 575,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
				}
			}
		]
	});

	// SIDE MENU POSITION STICKY
	$("#side-menu-wrap").JStick({
		parent: $('.main-content'),
		offsetTop: 100,
		offsetBottom: 0
	})

	// SIDE MENU (BLACK) POSITION STICKY
	$("#side-menu-black").JStick({
		parent: $('.col-menu'),
		offsetTop: 20,
		offsetBottom: 0
	})

	// OPEN/CLOSE SIDE MENU
	$('.open').click(function(e){
		$('.side-menu').toggleClass('opacity-0');
		$('.side-menu').toggleClass('height-0');
		$('.open').toggleClass('opacity-0');
		e.preventDefault();
	});

	$('.close').click(function(e){
		$('.side-menu').toggleClass('opacity-0');
		$('.side-menu').toggleClass('height-0');
		$('.open').toggleClass('opacity-0');
		e.preventDefault();
	});

	if(document.documentElement.clientWidth < 991) {
		$('.shop-window-container').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows: false,
						dots: true,
						slidesToShow: 1,
					}
				},
			]
		});
	}
	if($('#rooms-items_content').length){
		var Shuffle = window.shuffle;
		var myShuffle = new Shuffle(document.getElementById('rooms-items_content'), {
			itemSelector: '.rooms-item-wrap',
			sizer: '.rooms-item-wrap',
			speed: 400,
			easing: 'ease',
		});
		myShuffle.update();
		$('.tab-nav-list a').on('click' , function(){
			$('.tab-nav-list a').removeClass('active');
			$(this).addClass('active');
			var catName = $(this).attr('data-group');
			myShuffle.filter(catName, shuffle);

			myShuffle.update();
		});
	}

	// SCREENSHOT SLIDER
	$('.screenshot-slider-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
	});

	// BOTTOM SIDE ITEM SLIDER
	$('.bottom-side-item-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
	});

});

// COLLAPSE MENU WHEN RESIZE

$(window).on('resize', function(){
	var win = $(this);
	if (win.width() >= 991) {
		$('#collapseMenu').collapse('hide');
	}
});