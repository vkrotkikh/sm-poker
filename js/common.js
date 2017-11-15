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
		$('.filters-section-link.-video').css("background-color", "#D4D8E1");
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

	$('.payment-method').selectpicker({
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
	$('.open-side-menu').click(function(e){
		$('.side-menu').toggleClass('opacity-0');
		$('.side-menu').toggleClass('height-0');
		$('.open-side-menu').toggleClass('opacity-0');
		e.preventDefault();
	});

	$('.close').click(function(e){
		$('.side-menu').toggleClass('opacity-0');
		$('.side-menu').toggleClass('height-0');
		$('.open-side-menu').toggleClass('opacity-0');
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

		$('.banners-images-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: false,
			dots: true,
			infinite: false,
			responsive: [
			{
				breakpoint: 575,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
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
		$('.tab-nav-list a').on('click' , function(e){
			e.preventDefault();
			$('.tab-nav-list a').removeClass('active');
			$(this).addClass('active');
			var catName = $(this).attr('data-group');
			myShuffle.filter(catName, shuffle);
			myShuffle.update();
		});
	}

	if($('#articles-choice-item').length){
		if(document.documentElement.clientWidth > 576) {
			var Shuffle = window.shuffle;
			var myShuffle = new Shuffle(document.getElementById('articles-choice-item'), {
				itemSelector: '.articles-choice-item',
				sizer: '.articles-choice-item',
				speed: 400,
				easing: 'ease',
			});
			myShuffle.update();
			$('.tab-nav-list a').on('click' , function(e){
				e.preventDefault();
				$('.tab-nav-list a').removeClass('active');
				$(this).addClass('active');
				var catName = $(this).attr('data-group');
				myShuffle.filter(catName, shuffle);

				myShuffle.update();
			});
		}
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

	// SLICK SlIDER FOR EDUCATION QUESTIONS
	if(document.documentElement.clientWidth < 501) {
		$('.edu_questions_slider_wrap').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
		});
	}

	if(document.documentElement.clientWidth < 576) {
		// SLICK SlIDER FOR OUR COACHES 
		$('.our_coaches_slider_wrap').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
		});

		// SLICK SlIDER COMMENTS
		$('.comments-wrap').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
		});

		coachFiltering();

		function coachFiltering() {
			var slider = $('#articles-choice-item'),
			filter = $('#articles-filter a');

			if (slider.length > 0) {
				slider.slick({
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					vertical: true,
					draggable: false,
					swipe: false,
					infinite: false,
				});

				filter.on('click', function(e) {
					e.preventDefault();
					// window.location.hash = '';
					filter.removeClass('active');
					$(this).addClass('active');
					var href = $(this).attr('href').split('#')[1];
					slider.slick('slickUnfilter');
					console.log(href);
					if (href !== 'all') {
						slider.slick('slickFilter', '[data-filter=' + href + ']');
					}
				});
			}
		}
	}

	// VIDEO SLIDER

	$('.video_slider_wrap_full').slick({
		slidesToShow: 3,
		nextArrow: '<div class="right-arrow"><span class="icon-right-arrow"></div>',
		prevArrow: '<div class="left-arrow"><span class="icon-left-arrow"></div>',
		responsive: [
		{
			breakpoint: 991,
			settings: {
				dots: true,
				arrows: false
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				dots: true,
				arrows: false
			}
		},
		]
	});

	$('.video_slider_wrap_full').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.slick-current').each(function(index, el) {
			$(this).find('iframe').attr('src', $(this).find('iframe').attr('src'));
			return false;
		});
	});

	$('.video_slider_wrap_modal').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.slick-current').each(function(index, el) {
			$(this).find('iframe').attr('src', $(this).find('iframe').attr('src'));
			return false;
		});
	});

	if ($('#coachModal').length) {
		$('#coachModal').on('hidden.bs.modal', function (e) {
			$("#coachModal").each(function(index, el) {
				$(this).find('iframe').attr('src', $(this).find('iframe').attr('src'));
			});
		})
		$('.video_slider_wrap_modal').slick({
			slidesToShow: 3,
			nextArrow: '<div class="right-arrow"><span class="icon-right-arrow"></div>',
			prevArrow: '<div class="left-arrow"><span class="icon-left-arrow"></div>',
			responsive: [
			{
				breakpoint: 991,
				settings: {
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false
				}
			},
			]
		});
	}

	//HIDE MODAL WINDOW
	$(".close_btn_wrap").click(function() {
		$('#coachModal').modal('hide')
	});

	// BREADCRUMBS-BLOG {
		$('.breadcrumbs-blog-open').on('click' , function(e){
			e.preventDefault();
			$('.breadcrumbs-blog-wrap').toggleClass('breadcrumbs-blog-show');
		})
	});




	// SHUFFLE VIDEO PAGE
	if($('#shuffle-grid').length){
		var Shuffle = window.shuffle;
		var myShuffle = new Shuffle(document.getElementById('shuffle-grid'), {
			itemSelector: '.shuffle-item',
			sizer: '.shuffle-item',
			speed: 400,
			easing: 'ease',
		});
		myShuffle.update();
		$('.shuffle-buttons-list a').on('click' , function(e){
			e.preventDefault();
			$('.shuffle-buttons-list a').removeClass('active');
			$(this).addClass('active');
			var catName = $(this).attr('data-group');
			myShuffle.filter(catName, shuffle);
			myShuffle.update();
		});
	}

		// SHUFFLE SHOP PAGE
	if($('#shuffle-grid-shop').length){
		var Shuffle = window.shuffle;
		var myShuffle = new Shuffle(document.getElementById('shuffle-grid-shop'), {
			itemSelector: '.shuffle-item',
			sizer: '.shuffle-item',
			speed: 400,
			easing: 'ease',
		});
		myShuffle.update();
		$('.shuffle-buttons-list a').on('click' , function(e){
			e.preventDefault();
			$('.shuffle-buttons-list a').removeClass('active');
			$(this).addClass('active');
			var catName = $(this).attr('data-group');
			myShuffle.filter(catName, shuffle);
			myShuffle.update();
		});
	}

// COLLAPSE MENU WHEN RESIZE

$(window).on('resize', function(){
	var win = $(this);
	if (win.width() >= 991) {
		$('#collapseMenu').collapse('hide');
	}
});

(function($){
	$(window).on("load",function(){
		if ($('.side-video-list-wrap').length) {
			$(".side-video-list-wrap").mCustomScrollbar();
		}
	});
})(jQuery);