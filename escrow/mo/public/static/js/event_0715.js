'use strict';
(function (global) {
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
              $('.newtro').css({'padding-top' : 195});
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

							$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap: 195});
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

					// console.log(endPos)
					// console.log(sTop)


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

	}
  var _rouletteStart = function _rouletteStart() {
    // var _rouletteStart = (function(){
      var _btn, pArr, _roulette;
      function init(){
        console.log('************ init 실행')
        _btn = $('#_rouletteBtn');
        pArr = ["0","1","2","3","4:꽝","5","6","7","8","9"];
        _roulette = $('#_roulette');
        eventBind();
      }
      var eventBind = function (num){
        console.log('************ event')
        _btn.on('click', function(){
          _roulette.rotate({
            angle:0,
            animateTo:360 * 5 + randomize(0, 360),
            easing: easeOutCirc,
            duration:4000
          });
          })
        }
        function randomize($min, $max){
          return Math.floor(Math.random() * ($max - $min + 1)) + $min;
        }
        var easeOutCirc = function (x, t, b, c, d) {
          return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        };
        return {
          init:init,
          eventBind : eventBind
        }
      }
      // })();
      // _rouletteStart.init();

	global.hiphoperEvent = {
        '_rouletteStart' : _rouletteStart,
        'newtro0710' : newtro0710,
        'eventClearanceslide': eventClearanceslide,
	};

})(this);

// 함수 호출
// hiphoperEvent.newtro0710();
hiphoperEvent.eventClearanceslide();
// hiphoperEvent._rouletteStart().init();
