'use strict';

(function(global){
	var
		$window = $(window),
		html = document.documentElement,
		$html = $(html),
		body,
		$body;

    var eventClearanceslide = function eventClearanceslide() {
        var $event_view = $('.event_view'),
            $eventClearanceslide = $event_view.find('.eventClearanceslide');

        $eventClearanceslide.slick({
            prevArrow: '<a href="javascript:void(0);" class="clearance_left_slide"></a>',
            nextArrow: '<a href="javascript:void(0);" class="clearance_right_slide"></a>',
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnDotsHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '10',
            variableWidth: true,
            speed: 250,
            //respondTo : 'window',
            // responsive: [
            //     {breakpoint:1024,
            //     settings: {slidesToShow:1,slidesToScroll:1,dots:true,arrows:false,pauseOnDotsHover:true,touchMove:true,}
            //     }
            // ]
        }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }
        });

        var $a_link = $('.eventClearanceslide').find('a');
        $a_link.on('click', function (e) {
            e.stopPropagation();
        });


				// var tipToggle = function () {
				// 	var $btn_tip_toggle = $('.button_tip_toggle'),
				// 		$cont_tip_toggle = $('.cont_tip_toggle');

				// 	$btn_tip_toggle.off().on('click', function(e) {
				// 		e.preventDefault();

				// 		$(this).toggleClass('on');
				// 		$(this).next().toggle();

				// 		//console.log($(this));

				// 	});
				// }
				// tipToggle();
    }

	var eventLookbookSlide = function eventLookbookSlide() {

		var $event_view = $('.event_view'),
		 	$event_lookbook_slide = $event_view.find('.event_lookbook_slides');
        if ($event_lookbook_slide.hasClass('_0812_')){
            $event_lookbook_slide.slick({
                prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnDotsHover: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '100',
                variableWidth: true,
                speed: 250,
                //respondTo : 'window',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: { slidesToShow: 1, slidesToScroll: 1, dots: false, arrows: false, pauseOnDotsHover: true, touchMove: true, }
                    }
                ]
            }).each(function (i, el) {
                if (el.slick.slideCount <= 1) {
                    $(el).slick('unslick');
                }
            });
        }else if ($event_lookbook_slide.hasClass('content_001')) {
            $event_lookbook_slide.slick({
                prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '100',
                variableWidth: true,
                speed: 250,
                //respondTo : 'window',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                            nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            pauseOnDotsHover: false,
                            touchMove: true,
                            centerMode: true,
                         }
                    }
                ]
            }).each(function (i, el) {
                if (el.slick.slideCount <= 1) {
                    $(el).slick('unslick');
                }
            });
        }else{
            $event_lookbook_slide.slick({
                prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnDotsHover: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '100',
                variableWidth: true,
                speed: 250,
                //respondTo : 'window',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                            nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            pauseOnDotsHover: false,
                            touchMove: true,
                        }
                    }
                ]
            }).each(function (i, el) {
                if (el.slick.slideCount <= 1) {
                    $(el).slick('unslick');
                }
            });
        }


		var $a_link = $('.event_lookbook_slides').find('a');
		$a_link.on('click', function(e){
			e.stopPropagation();
		});

	}

	var openEventSlide = function openEventSlide() {
		/*
		var $open_event = $('.open_event'),
		 	$open_event_slide = $open_event.find('.slides');

		$open_event_slide.slick({
			dots:true,
			autoplay:false,
			pauseOnDotsHover:true,
			dotsClass:'slick-dots small pos_center h dis_f',
			draggable:true,
			arrows:false,
			infinite:false,
			variableWidth: true,
		}).each(function(index, el){
			if( $(el)[0].slick.slideCount == 1 ){
				$(el).slick('unslick');
			}
		});
		$('#slideRelease').slick('slickSetOption',{
			arrows:false
		},true);
		*/

		var $event_view = $('.event_view'),
		 	$event_cont_slide = $event_view.find('.pc_cont_slides');

		$event_cont_slide.slick({
			prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
			nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
			autoplay:true,
			autoplaySpeed:5000,
			pauseOnDotsHover:true,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			centerPadding: '10',
			variableWidth: true,
			respondTo : 'window',
			infinite:false,

		}).each(function(i,el){
			if( el.slick.slideCount <= 1 ){
				$(el).slick('unslick');
			}
		});
	}

	var visualFadeInOut = function visualFadeInOut() {

		var $box = $('.visual_area ul'),
			$items = $box.find('li'),
			currentindex = 0,
			duration = 5000, // 유지시간. 밀리초,
			changingduration = 2000, // 변환시간. 밀리초
			numitems = $items.length;

		$items.each(function(i) {
			$items[i] = $(this);
		});

		if ($('.event_fadeinout').length) {
			setTimeout(next, duration);
		}

		function next() {
			var nextindex = currentindex+1 === numitems ? 0 : currentindex+1;
			$items[nextindex].css({opacity: 0}).appendTo($box)
				._animate({opacity: 1}, {duration: changingduration, easing: Quad.easeOut, onComplete: function() {
					setTimeout(next, duration);
				}});
			currentindex = nextindex;
		}


	}


	var eventLogoSlide = function eventLogoSlide() {

		var $event_view = $('.event_view'),
		 	$event_lookbook_slide = $event_view.find('.event_logo_slides');

		$event_lookbook_slide.slick({
			autoplay:true,
			autoplaySpeed:5000,
			pauseOnDotsHover:true,
			slidesToShow: 7,
			slidesToScroll: 1,
			centerMode: false,
			variableWidth: false,
			respondTo : 'window',
			arrows:false,
			responsive: [
				{breakpoint:3000,
				settings: {slidesToShow:7,slidesToScroll:1}
				},
				{breakpoint:1160,
				settings: {slidesToShow:7,slidesToScroll:1}
				},
				{breakpoint:1024,
				settings: {slidesToShow:6,slidesToScroll:2}
				}
			]
		}).each(function(i,el){
			if( el.slick.slideCount <= 1 ){
				$(el).slick('unslick');
			}
		});
	}


	var moEventSlide = function moEventSlide() {

		var $event_view = $('.event_view'),
		 	$open_event_slide = $event_view.find('.img_slides');

		$open_event_slide.slick({
			dots:false,
			autoplay:true,
			pauseOnDotsHover:true,
			draggable:true,
			arrows:false,
			infinite:true,
			variableWidth: true,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	}

	var moEventContSlide = function moEventContSlide() {

		var $event_view = $('.event_view'),
		 	$event_cont_slide = $event_view.find('.cont_slides');

			$event_cont_slide.slick({
				dots:true,
				autoplay:false,
				pauseOnDotsHover:true,
				draggable:false,
				arrows:false,
				infinite:true,
				variableWidth: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			 });

	}


	var eventBannerSlide = function eventBannerSlide() {

		var $event_view = $('.event_view'),
		 	$open_event_slide = $event_view.find('.banner_slides');

		$open_event_slide.slick({
			dots:true,
			autoplay:false,
			pauseOnDotsHover:true,
			dotsClass:'slick-dots small pos_center h dis_f',
			draggable:true,
			arrows:false,
			infinite:false,
			variableWidth: true,
		}).each(function(index, el){
			if( $(el)[0].slick.slideCount == 1 ){
				$(el).slick('unslick');
			}
		});
		$('#slideRelease').slick('slickSetOption',{
			arrows:false
		},true);

	}

	var eventSlideSyncing = function eventSlideSyncing() {

		if ($('.event_0321_designerSpecial').length) {

			$('.slider-single').slick({
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      arrows: true,
		      fade: false,
		      adaptiveHeight: true,
		      infinite: true,
		      useTransform: true,
		      speed: 400,
		      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		      prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전 브랜드</span></button>',
			  nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음 브랜드</span></button>',
		    });

		    $('.slider-nav').on('init', function(event, slick) {
		      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
		    }).slick({
		      slidesToShow: 10,
		      slidesToScroll: 10,
		      dots: false,
		      focusOnSelect: false,
		      infinite: true,
		    });
		}

		if ($('.event_0327_springForWoman').length) {

			$('.slider-single').slick({
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      arrows: true,
		      fade: false,
		      adaptiveHeight: true,
		      infinite: true,
		      useTransform: true,
		      speed: 400,
		      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		      prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전 브랜드</span></button>',
			  nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음 브랜드</span></button>',
		    });

		    $('.slider-nav').on('init', function(event, slick) {
		      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
		    }).slick({
		      slidesToShow: 8,
		      slidesToScroll: 8,
		      dots: false,
		      focusOnSelect: false,
		      infinite: true,
		    });
		}

		if ($('.benefit_promotion_all').length) {

			$('.slider-single').slick({
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      arrows: true,
		      fade: false,
		      adaptiveHeight: true,
		      infinite: true,
		      useTransform: true,
		      speed: 400,
		      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		      prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전 브랜드</span></button>',
			  nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음 브랜드</span></button>',
		    });

		    $('.slider-nav').on('init', function(event, slick) {
		      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
		    }).slick({
		      slidesToShow: 8,
		      slidesToScroll: 8,
		      dots: false,
		      focusOnSelect: false,
		      infinite: true,
		    });
		}

		if ($('.event_0318_bestBrand').length) {

			$('.slider-single').slick({
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      arrows: false,
		      fade: false,
		      adaptiveHeight: true,
		      infinite: true,
		      useTransform: true,
		      speed: 400,
		      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		    });

		    $('.slider-nav').on('init', function(event, slick) {
		      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
		    }).slick({
		      slidesToShow: 5,
		      slidesToScroll: 5,
		      dots: false,
		      focusOnSelect: false,
		      infinite: true,
		    });
		}

	    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
	      $('.slider-nav').slick('slickGoTo', currentSlide);
	      var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
	      $('.slider-nav .slick-slide.is-active').removeClass('is-active');
	      $(currrentNavSlideElem).addClass('is-active');
	    });

	    $('.slider-nav').on('click', '.slick-slide', function(event) {
	      event.preventDefault();
	      var goToSingleSlide = $(this).data('slick-index');
	      $('.slider-single').slick('slickGoTo', goToSingleSlide);
	    });
	}

	var buttonLink = function buttonLink() {

		if ($('.event_0315_sneakers').length) {

			var $button01 = $('.button01'),
				$button02 = $('.button02'),
				$button03 = $('.button03'),
				$button04 = $('.button04'),
				$button05 = $('.button05'),
				$button06 = $('.button06'),
				$button07 = $('.button07');

			$button01.on('click', function() { location.href = "/brand/EXCELSIOR";});
			$button02.on('click', function() { location.href = "/brand/colorcolla";});
			$button03.on('click', function() { location.href = "/brand/gram";});
			$button04.on('click', function() { location.href = "/brand/JDAUL";});
			$button05.on('click', function() { location.href = "/brand/BMSFRANCE";});
			$button06.on('click', function() { location.href = "/brand/Vans";});
			$button07.on('click', function() { location.href = "/brand/MACHENZIE";});

		}

	}

	var eventContSlide = function eventContSlide() {

		var $event_view = $('.event_view'),
		 	$event_cont_slide = $event_view.find('.pc_cont_slides');

		$event_cont_slide.slick({
			prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
			nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
			autoplay:true,
			autoplaySpeed:5000,
			pauseOnDotsHover:true,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			centerPadding: '10',
			variableWidth: true,
			respondTo : 'window',
			infinite:false,

		}).each(function(i,el){
			if( el.slick.slideCount <= 1 ){
				$(el).slick('unslick');
			}
		});

	}

	var aprilPromotion = function aprilPromotion() {

		var $menuLinks,
        $sections,
        positionTops = [];

        if ($('.april_promotion').length) {
	        $(window).on('scroll', function() {
				var winTop = $(window).scrollTop();
				if ( winTop > 1360 ) {
				$('.button_go_wrap').addClass('top_fixed');
				} else {
				$('.button_go_wrap').removeClass('top_fixed');
				}
			});
    	}

    	if ($('.benefit_promotion').length || $('.benefit_promotion_all').length) {
			$(window).on('scroll', function() {
				var winTop = $(window).scrollTop();
				if ( winTop > 610 ) {
				$('.button_go_wrap').addClass('top_fixed');
				} else {
				$('.button_go_wrap').removeClass('top_fixed');
				}
			});
		}

		var tabConts =  function() {
			var $tab_container = $('.tab_container'),
				$tab_menus = $tab_container.find('.tab_menu li a'),
				$tab_conts = $tab_container.find('.tab_conts'),
				$tab_cont =  $tab_conts.find('.tab_cont');

			var changeCont = function(index) {
				if ( index >=0 && index <= $tab_menus.length) {

					if (!$(this).hasClass('active')) {
						$($tab_cont[index]).siblings().removeClass('active');
						$($tab_cont[index]).addClass('active');
					} else {
						$($tab_cont[index]).removeClass('active');
						$($tab_cont[index]).addClass('active');
					}
				}
			};

			var clickMenu = function(link, index) {
				link.addEventListener('click',function(e){
					e.preventDefault();

					if (!$(this).parent().hasClass('active')) {
						$(this).parent().siblings().removeClass('active');
						$(this).parent().addClass('active');
					} else {
						$(this).parent().removeClass('active');
						$(this).parent().addClass('active');
					}
					changeCont(index);
				});
			};

			for (var $tab_menu, i=0, l=$tab_menus.length;i<l;i++){
				$tab_menu = $tab_menus[i];
				clickMenu($tab_menu, i);
			}
		}
		tabConts()

		// tip toggle
		var tipToggle = function () {
			var $btn_tip_toggle = $('.button_tip_toggle'),
				$cont_tip_toggle = $('.cont_tip_toggle');

			$btn_tip_toggle.off().on('click', function(e) {
				e.preventDefault();

				$(this).toggleClass('on');
				$(this).next().toggle();

				//console.log($(this));

			});
		}
		tipToggle();


		// btnTop
		var $btn_top = $('.button_top');
		$(window).on('scroll', function() {
			var winTop = $(window).scrollTop();
			if ( winTop > 2000 ) {
			$btn_top.fadeIn();
			} else {
			$btn_top.fadeOut();
			}
		});

		$btn_top.on('click', function() {
			$('html, body').animate( { scrollTop : 0 }, 400 );
			return false;
		});

		var $btn_share = $('.button_share');
		$(window).on('scroll', function() {
			var winTop = $(window).scrollTop();
			if ( winTop > 2000 ) {
			$btn_share.fadeIn();
			} else {
			$btn_share.fadeOut();
			}
		});

		//countdown
		var countdown = function () {
			$('.countdown').countdown('2019/04/21', function(event) {
			  $(this).html(event.strftime('%H %M'));
			});
		}
		countdown();

		// txt animation
		var txtAnimation = function () {
			setTimeout(function(){
			  $('.promo_visual').addClass('show');
			}, 500);
			setTimeout(function(){
			  $('.promo_visual').addClass('show_txt1');
			}, 500);
			setTimeout(function(){
			 $('.promo_visual').addClass('show2');
			}, 4000);
			setTimeout(function(){
			  $('.promo_visual').removeClass('show_txt1');
			}, 5000);
		}
		txtAnimation();

        // button
        $(function() {

            $menuLinks = $('.button_go_wrap').find('li')
            $sections = $('.promo_event');

            // .section들의 top 위치값들
            $sections.each(function(idx, elt) {
                positionTops.push($(elt).position().top);
            });

            // lnb 메뉴의 a링크와 section과 매칭
            $('.button_go_wrap').find('li a').each(function(idx, elt) {
                $(elt).click(function() {
                	$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap:0});
                });
            });

            $(window).scroll(function() {
                var sTop = Number($(this).scrollTop()),
                    sHeight = $(window).scrollTop(),
                	len = positionTops.length,
                    endPos =  positionTops[len-1],
                    targetIdx = 0;



                for(var i=0; i<len; i++ ) {
                    if( sTop > 0 && sTop > positionTops[i]) {
                        targetIdx = i
                        if( i < len -1 && sTop <= positionTops[endPos] ) {
                            break;
                        }
                    }
                }
                $.fn.menuOn(targetIdx);

            });
        });

        $.fn.menuOn = function(idx, elt) {

            var elt = elt || $menuLinks.eq(idx).children().get(0), // a link
                $sub_menu = $(elt).parent().eq(0), // li.link_event
                winTop = $(window).scrollTop();

			$sub_menu.addClass('on');

            $menuLinks.each(function() {
                if( this != $sub_menu.get(0) ) {
                    $(this).removeClass('on');
                }
            });
        }

        $.fn.scrollTo = function( obj ){

            var target = obj.target || '';
            if (!target) {
                return;
            }

            var gap = obj.gap || 0,
                speed = obj.speed || 500,
                variable = obj.variable ? obj.variable : 0,
                variableHeight = variable ? $(variable).height() - 100 : 0;

            $('body,html').animate({scrollTop: ($(target).offset().top - gap - variableHeight), duration : speed});

        }

        // sub tap slide
		var promoSlide = function () {
			var idx,
			$april_promotion = $('.april_promotion'),
		 	$promo_slides = $april_promotion.find('.promo_slides');

			$('.promo_slides .item').each(function(i){
				if ($(this).hasClass("on")) {
					idx = i;
				}
			});

			$promo_slides.slick({
				prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
				nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
				dots:false,
				autoplay:false,
				pauseOnDotsHover:true,
				draggable:true,
				centerMode:true,
				initialSlide:idx,
				arrows:true,
				infinite:true,
				variableWidth: true,
				slidesToShow: 3,
				slidesToScroll: 1,
			 });

		};
		promoSlide();

	}


	var amorSale = function amorSale() {

		// sub tap slide
		var promoSlide1 = function () {

			var idx,
			$amorSale_promotion = $('.amorsale0605'),
		 	$promo_slides1 = $amorSale_promotion.find('.promo_slides');

			$('.promo_slides .item').each(function(i){
				if ($(this).hasClass("on")) {
					idx = i;
				}
			});

			$promo_slides1.slick({
				prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
				nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
				dots:false,
				autoplay:false,
				pauseOnDotsHover:true,
				draggable:true,
				centerMode:true,
				initialSlide:idx,
				arrows:true,
				infinite:true,
				variableWidth: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							dots: true,
						}
					},
				]
			 });
		}
		promoSlide1();

	}

	var coolSale201906 = function coolSale() {

		var idx,
		$menuLinks,
		$sections,
		$userAgent,
		$_header,
        positionTops = [];

		$userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

        if ($('.cool_sale').length) {
			if(!$userAgent){
				$(window).on('scroll', function() {
					var winTop = $(window).scrollTop();
						if ( winTop > 1350 ) {
							$('.button_go_wrap').addClass('top_fixed');
							$('.cool_sale').css({'padding-top' : 80});
						} else {
							$('.button_go_wrap').removeClass('top_fixed');
							$('.cool_sale').css({'padding-top' : 0});
						}
				});
			}else{
				$(window).on('scroll', function() {
					var winTop = $(window).scrollTop();
						if ( winTop > 280 ) {
							$('.button_go_wrap').addClass('top_fixed');
							$('.cool_sale').css({'padding-top' : 80});
						} else {
							$('.button_go_wrap').removeClass('top_fixed');
							$('.cool_sale').css({'padding-top' : 0});
						}
				});
			}

    	}

		var tabConts =  function() {
			var $tab_container = $('.tab_container'),
				$tab_menus = $tab_container.find('.tab_menu li a'),
				$tab_conts = $tab_container.find('.tab_conts'),
				$tab_cont =  $tab_conts.find('.tab_cont');

			var changeCont = function(index) {
				if ( index >=0 && index <= $tab_menus.length) {

					if (!$(this).hasClass('active')) {
						$($tab_cont[index]).siblings().removeClass('active');
						$($tab_cont[index]).addClass('active');
					} else {
						$($tab_cont[index]).removeClass('active');
						$($tab_cont[index]).addClass('active');
					}
				}
			};

			var clickMenu = function(link, index) {
				link.addEventListener('click',function(e){
					e.preventDefault();

					if (!$(this).parent().hasClass('active')) {
						$(this).parent().siblings().removeClass('active');
						$(this).parent().addClass('active');
					} else {
						$(this).parent().removeClass('active');
						$(this).parent().addClass('active');
					}
					changeCont(index);
				});
			};

			for (var $tab_menu, i=0, l=$tab_menus.length;i<l;i++){
				$tab_menu = $tab_menus[i];
				clickMenu($tab_menu, i);
			}
		}
		tabConts()

		// tip toggle
		var tipToggle = function () {
			var $btn_tip_toggle = $('.button_tip_toggle'),
				$cont_tip_toggle = $('.cont_tip_toggle');

			$btn_tip_toggle.off().on('click', function(e) {
				e.preventDefault();

				$(this).toggleClass('on');
				$(this).next().toggle();

				//console.log($(this));

			});
		}
		tipToggle();


		// btnTop
		var $btn_top = $('.button_top');

		$(window).on('scroll', function() {
			var winTop = $(window).scrollTop();
			if ( winTop > 2000 ) {
			$btn_top.show();
			} else {
			$btn_top.hide();
			}
		});


		$btn_top.on('click', function() {
			$('html, body').animate( { scrollTop : 0 }, 400 );
			return false;
		});

		var $btn_share = $('.button_share');

		$(window).on('scroll', function() {
			var winTop = $(window).scrollTop();
			if ( winTop > 2000 ) {
			$btn_share.show();
			} else {
			$btn_share.hide();
			}
		});


        // button
        $(function() {

            $menuLinks = $('.button_go_wrap').find('li');
			$sections = $('.promo_event');
			$_header = $('.site_header');
            // .section들의 top 위치값들
            $sections.each(function(idx, elt) {
				positionTops.push($(elt).offset().top);
				//console.log(positionTops)
            });

            // lnb 메뉴의 a링크와 section과 매칭
            $('.button_go_wrap').find('li>a').each(function(idx, elt) {
                $(elt).click(function() {
					if(!$userAgent){
						$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap:0});
					} else {
						if($('.button_go_wrap').hasClass('top_fixed')){
							$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap:90});
						}else{
							$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap:200});
						}

					}

                });
            });

            $(window).scroll(function() {
                var sTop = Number($(this).scrollTop()+300),
                    sHeight = $(window).scrollTop(),
					len = positionTops.length,
                    endPos =  positionTops[len-1],
					targetIdx = 0;

					//console.log(endPos)
					//console.log(sTop)


                for(var i=0; i<len; i++ ) {
                    if( sTop > 2000 && sTop > positionTops[i]) {
                        targetIdx = i
                        if( i < len -1 && sTop <= positionTops[endPos] ) {
                            break;
                        }
                    }
                }
                $.fn.menuOn(targetIdx);
            });
        });

        $.fn.menuOn = function(idx, elt) {

            var elt = elt || $menuLinks.eq(idx).children().get(0), // a link
                $sub_menu = $(elt).parent().eq(0), // li.link_event
                winTop = $(window).scrollTop();

			$sub_menu.addClass('on');
			//console.log(elt)

            $menuLinks.each(function() {
                if( this != $sub_menu.get(0) ) {

                    $(this).removeClass('on');
                }
            });
        }

        $.fn.scrollTo = function( obj ){

            var target = obj.target || '';
            if (!target) {
                return;
            }

            var gap = obj.gap || 0,
                speed = obj.speed || 500,
                variable = obj.variable ? obj.variable : 0,
                variableHeight = variable ? $(variable).height() - 100 : 0;

            $('body,html').animate({scrollTop: ($(target).offset().top - gap - variableHeight), duration : speed});

        }
	}

	var newtro0710 = function newtro() {

		var idx,
		$menuLinks,
		$sections,
		$userAgent,
		$_header,
        positionTops = [];

		$userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

        if ($('.newtro').length) {
			if(!$userAgent){
				$(window).on('scroll', function() {
                    var winTop = $(window).scrollTop();
                        console.log(winTop);
						if ( winTop > 1100 ) {
							$('.button_go_wrap').addClass('top_fixed');
							$('.newtro').css({'padding-top' : 150});
						} else {
							$('.button_go_wrap').removeClass('top_fixed');
							$('.newtro').css({'padding-top' : 0});
						}
				});
			}else{
				$(window).on('scroll', function() {
					var winTop = $(window).scrollTop();
						if ( winTop > 766 ) {
							$('.button_go_wrap').addClass('top_fixed');
							$('.newtro').css({'padding-top' : 140});
						} else {
							$('.button_go_wrap').removeClass('top_fixed');
							$('.newtro').css({'padding-top' : 0});
						}
				});
			}

    	}

		var tabConts =  function() {
			var $tab_container = $('.tab_container'),
				$tab_menus = $tab_container.find('.tab_menu li a'),
				$tab_conts = $tab_container.find('.tab_conts'),
				$tab_cont =  $tab_conts.find('.tab_cont');

			var changeCont = function(index) {
				if ( index >=0 && index <= $tab_menus.length) {

					if (!$(this).hasClass('active')) {
						$($tab_cont[index]).siblings().removeClass('active');
						$($tab_cont[index]).addClass('active');
					} else {
						$($tab_cont[index]).removeClass('active');
						$($tab_cont[index]).addClass('active');
					}
				}
			};

			var clickMenu = function(link, index) {
				link.addEventListener('click',function(e){
					e.preventDefault();

					if (!$(this).parent().hasClass('active')) {
						$(this).parent().siblings().removeClass('active');
						$(this).parent().addClass('active');
					} else {
						$(this).parent().removeClass('active');
						$(this).parent().addClass('active');
					}
					changeCont(index);
				});
			};

			for (var $tab_menu, i=0, l=$tab_menus.length;i<l;i++){
				$tab_menu = $tab_menus[i];
				clickMenu($tab_menu, i);
			}
		}
		tabConts()

		// tip toggle
		var tipToggle = function () {
			var $btn_tip_toggle = $('.button_tip_toggle'),
				$cont_tip_toggle = $('.cont_tip_toggle');

			$btn_tip_toggle.off().on('click', function(e) {
				e.preventDefault();

				$(this).toggleClass('on');
				$(this).next().toggle();

				//console.log($(this));

			});
		}
		tipToggle();


		// btnTop
		// var $btn_top = $('.button_top');

		// $(window).on('scroll', function() {
		// 	var winTop = $(window).scrollTop();
		// 	if ( winTop > 1200 ) {
		// 	$btn_top.show();
		// 	} else {
		// 	$btn_top.hide();
		// 	}
		// });


		// $btn_top.on('click', function() {
		// 	$('html, body').animate( { scrollTop : 0 }, 400 );
		// 	return false;
		// });

		// var $btn_share = $('.button_share');

		// $(window).on('scroll', function() {
		// 	var winTop = $(window).scrollTop();
		// 	if ( winTop > 1200 ) {
		// 	$btn_share.show();
		// 	} else {
		// 	$btn_share.hide();
		// 	}
		// });


        // button
        $(function() {

            $menuLinks = $('.button_go_wrap').find('li');
			$sections = $('.promo_event');
			$_header = $('.site_header');
            // .section들의 top 위치값들
            $sections.each(function(idx, elt) {
				positionTops.push($(elt).offset().top);
				//console.log(positionTops)
            });

            // lnb 메뉴의 a링크와 section과 매칭
            $('.button_go_wrap').find('li>a').each(function(idx, elt) {
                $(elt).click(function() {
					if(!$userAgent){
						$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap:0});
					} else {
						if($('.button_go_wrap').hasClass('top_fixed')){
                            console.log($(window).scrollTop() + " top_fixed")

							$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap: 140});
						}else{
                            console.log($(window).scrollTop() + " none_fixed")

							$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap: 80});
						}

					}

                });
            });

            $(window).scroll(function() {
                var sTop = Number($(this).scrollTop()+300),
                    sHeight = $(window).scrollTop(),
					len = positionTops.length,
                    endPos =  positionTops[len-1],
					targetIdx = 0;

					console.log(endPos)
					console.log(sTop)


                for(var i=0; i<len; i++ ) {
                    if( sTop > 2000 && sTop > positionTops[i]) {
                        targetIdx = i
                        if( i < len -1 && sTop <= positionTops[endPos] ) {
                            break;
                        }
                    }
                }
                $.fn.menuOn(targetIdx);
            });
        });

        $.fn.menuOn = function(idx, elt) {

            var elt = elt || $menuLinks.eq(idx).children().get(0), // a link
                $sub_menu = $(elt).parent().eq(0), // li.link_event
                winTop = $(window).scrollTop();

			$sub_menu.addClass('on');
			//console.log(elt)

            $menuLinks.each(function() {
                if( this != $sub_menu.get(0) ) {

                    $(this).removeClass('on');
                }
            });
        }

        $.fn.scrollTo = function( obj ){

            var target = obj.target || '';
            if (!target) {
                return;
            }

            var gap = (obj.gap || 0),
                speed = (obj.speed || 300),
                variable = (obj.variable ? obj.variable : 0),
                variableHeight = (variable ? $(variable).height() - 140 : 0);

            console.log(gap)

            $('body,html').animate({scrollTop: ($(target).offset().top - gap - variableHeight), duration : speed});

        }

        // var _rouletteStart = (function(){
        //     var _btn, pArr, _roulette;
        //     function init(){
        //         _btn = $('#_rouletteBtn');
        //         pArr = ["0","1","2","3","4:꽝","5","6","7","8","9"];
        //         _roulette = $('#_roulette');
        //         eventBind();
        //     }
        //     function eventBind(){
        //         _btn.on('click', function(){
        //             _roulette.rotate({
        //                 angle:0,
        //                 animateTo:360 * 5 + randomize(0, 360),
        //                 easing: easeOutCirc,
        //                 duration:4000
        //              });
        //         })
        //     }
        //     function randomize($min, $max){
        //         return Math.floor(Math.random() * ($max - $min + 1)) + $min;
        //     }
        //     var easeOutCirc = function (x, t, b, c, d) {
        //         return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        //     };
        //     return {
        //         init:init
        //     }
        // })();
        // _rouletteStart.init();
	}

    var delimanca0726 = function delimanca0726() {
			console.log('test')

        // sub tap slide
        var promoSlide1 = function () {

            var idx,
                $_promotion = $('.delimanca0726'),
                $promo_slides1 = $_promotion.find('.promo_slides');

            $('.promo_slides .item').each(function (i) {
                if ($(this).hasClass("on")) {
                    idx = i;
                }
            });

            $promo_slides1.slick({
                prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                dots: false,
                autoplay: false,
                pauseOnDotsHover: true,
                draggable: true,
                centerMode: true,
                initialSlide: idx,
                arrows: true,
                infinite: true,
                variableWidth: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                            nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                            slidesToShow: 1,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: false,
                            centerMode: true,
                            centerPadding: '16px',
                        }
                    },
                ]
            });
        }
        promoSlide1();

    }

    var augustBenefit = function augustBenefit() {

        var idx,
            $menuLinks,
            $sections,
            $userAgent,
            $_header,
            positionTops = [];

        $userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

        if ($('.august_benefit').length) {
            if (!$userAgent) {
                $(window).on('scroll', function () {
                    var winTop = $(window).scrollTop();
                    if (winTop > 1220) {
                        $('.button_go_wrap').addClass('top_fixed');
                        $('.august_benefit').css({ 'padding-top': 150 });
                    } else {
                        $('.button_go_wrap').removeClass('top_fixed');
                        $('.august_benefit').css({ 'padding-top': 0 });
                    }
                });
            } else {
                $(window).on('scroll', function () {
                    var winTop = $(window).scrollTop();
                    if (winTop > 520) {
                        $('.button_go_wrap').addClass('top_fixed');
                        $('.august_benefit').css({ 'padding-top': 150 });
                    } else {
                        $('.button_go_wrap').removeClass('top_fixed');
                        $('.august_benefit').css({ 'padding-top': 0 });
                    }
                });
            }

        }



        var tabConts = function () {
            var $tab_container = $('.tab_container'),
                $tab_menus = $tab_container.find('.tab_menu li a'),
                $tab_conts = $tab_container.find('.tab_conts'),
                $tab_cont = $tab_conts.find('.tab_cont');

            var changeCont = function (index) {
                if (index >= 0 && index <= $tab_menus.length) {

                    if (!$(this).hasClass('active')) {
                        $($tab_cont[index]).siblings().removeClass('active');
                        $($tab_cont[index]).addClass('active');
                    } else {
                        $($tab_cont[index]).removeClass('active');
                        $($tab_cont[index]).addClass('active');
                    }
                }
            };

            var clickMenu = function (link, index) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();

                    if (!$(this).parent().hasClass('active')) {
                        $(this).parent().siblings().removeClass('active');
                        $(this).parent().addClass('active');
                    } else {
                        $(this).parent().removeClass('active');
                        $(this).parent().addClass('active');
                    }
                    changeCont(index);
                });
            };

            for (var $tab_menu, i = 0, l = $tab_menus.length; i < l; i++) {
                $tab_menu = $tab_menus[i];
                clickMenu($tab_menu, i);
            }
        }
        tabConts()
        // button
        $(function () {

            $menuLinks = $('.button_go_wrap').find('li');
            $sections = $('.promo_event');
            $_header = $('.site_header');
            // .section들의 top 위치값들
            $sections.each(function (idx, elt) {
                positionTops.push($(elt).offset().top);
                //console.log(positionTops)
            });

            // lnb 메뉴의 a링크와 section과 매칭
            $('.button_go_wrap').find('li>a').each(function (idx, elt) {
                $(elt).click(function () {
                    if (!$userAgent) {
                        $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: 0 });
                    } else {
                        if ($('.button_go_wrap').hasClass('top_fixed')) {
                            $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: 140 });
                        } else {
                            $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: 110 });
                        }

                    }

                });
            });

            $(window).scroll(function () {
                var sTop = Number($(this).scrollTop() + 300),
                    sHeight = $(window).scrollTop(),
                    len = positionTops.length,
                    endPos = positionTops[len - 1],
                    targetIdx = 0;

                //console.log(endPos)
                //console.log(sTop)


                for (var i = 0; i < len; i++) {
                    if (sTop > 2000 && sTop > positionTops[i]) {
                        targetIdx = i
                        if (i < len - 1 && sTop <= positionTops[endPos]) {
                            break;
                        }
                    }
                }
                $.fn.menuOn(targetIdx);
            });
        });

        $.fn.menuOn = function (idx, elt) {

            var elt = elt || $menuLinks.eq(idx).children().get(0), // a link
                $sub_menu = $(elt).parent().eq(0), // li.link_event
                winTop = $(window).scrollTop();

            $sub_menu.addClass('on');
            //console.log(elt)

            $menuLinks.each(function () {
                if (this != $sub_menu.get(0)) {

                    $(this).removeClass('on');
                }
            });
        }

        $.fn.scrollTo = function (obj) {

            var target = obj.target || '';
            if (!target) {
                return;
            }

            var gap = obj.gap || 0,
                speed = obj.speed || 500,
                variable = obj.variable ? obj.variable : 0,
                variableHeight = variable ? $(variable).height() - 100 : 0;

            $('body,html').animate({ scrollTop: ($(target).offset().top - gap - variableHeight), duration: speed });

        }
    }

	global.hiphoperEvent = {

		'eventLookbookSlide': eventLookbookSlide,
		'openEventSlide': openEventSlide,
		'visualFadeInOut': visualFadeInOut,
		'eventLogoSlide' : eventLogoSlide,
		'moEventSlide' : moEventSlide,
		'moEventContSlide' : moEventContSlide,
		'eventBannerSlide' : eventBannerSlide,
		'eventSlideSyncing' : eventSlideSyncing,
		'buttonLink' : buttonLink,
		//'eventContSlide' : eventContSlide,
		//'aprilPromotion' : aprilPromotion,
		//'amorSale' : amorSale,
        //'coolSale201906' : coolSale201906,
        //'newtro0710' : newtro0710,
        'eventClearanceslide': eventClearanceslide,
        'delimanca0726': delimanca0726,
        'augustBenefit': augustBenefit,
	};

})(this);

// 함수 호출

//hiphoperEvent.eventLookbookSlide();
hiphoperEvent.openEventSlide();
hiphoperEvent.visualFadeInOut();
hiphoperEvent.eventLogoSlide();
hiphoperEvent.moEventSlide();
hiphoperEvent.eventBannerSlide();
hiphoperEvent.eventSlideSyncing();
hiphoperEvent.moEventContSlide();
hiphoperEvent.buttonLink();
//hiphoperEvent.eventContSlide();
//hiphoperEvent.amorSale();
//hiphoperEvent.aprilPromotion();
//hiphoperEvent.coolSale201906();
// hiphoperEvent.newtro0710();
//hiphoperEvent.delimanca0726();
hiphoperEvent.augustBenefit();

window.addEventListener("load", function(event) {
    hiphoperEvent.eventClearanceslide();
    hiphoperEvent.eventLookbookSlide();
	if(document.getElementsByClassName('delimanca0726').length > 0){
		hiphoperEvent.delimanca0726();
    }
    else if (document.getElementsByClassName('august_benefit').length > 0) {
        hiphoperEvent.augustBenefit();
    }

});
