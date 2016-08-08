$(function() {

	$('.js-about-slider').slick({
		arrows: true,
		dots: true,
		responsive: [
	        {
	          breakpoint: 992,
	          settings: {
	            infinite: true,
	            dots: true,
	            arrows: false
	          }
	        }
	    ]
    });

    $(".js-mob-menu").click(function(){
		$(this).toggleClass('active');
		$(this).next('.main-nav').slideToggle(200);
	});

});

$(function() {

	$('.js-reviews_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false
          }
        }
      ]
    });

    $('.js-institutions').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      arrows:false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });
});

$(function() {

	$('.js-select').select2({
		minimumResultsForSearch: -1
	});

	$('.js-catalog-slider').slick({
      	arrows: false,
		dots: true
    });


	$('.js-tabs').tabslet();

	$('.js-tabs').on("_after", function() {
		$(this).find('.js-catalog-slider').slick('reinit');
	});
});

$(function() {
	var swidth=(window.innerWidth-$(window).width());

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Загрузка изображения #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Не удалось загрузить изображение #%curr%</a>',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		callbacks: {
			open: function() { $('.header').css('padding-right', swidth + "px"); }, 
			close: function() { $('.header').css('padding-right', 0); },
		}
	});

	// Работа верхнего меню при скролле страницы
		var $menu = $(".header");
		if ( $(this).scrollTop() > 2){
		$menu.addClass("active");
		} else if($(this).scrollTop() <= 2) {
		$menu.removeClass("active");
	}

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 2){
		$menu.addClass("active");
		} else if($(this).scrollTop() <= 2) {
		$menu.removeClass("active");
		}
	});

	$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scroller').fadeIn();
        } else {
            $('.scroller').fadeOut();
        }
    });
    $('.scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $(".main-nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
			fixed_offset = 170,

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top - fixed_offset}, 1500);
	});
});