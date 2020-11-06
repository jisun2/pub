// 2019.07.02 모바일 - GNB - 메뉴
'use strict';

(function(global){
  var ResizeFunction = function ResizeFunction(ele){
    var $target = ele.find('.H_Slide');
    $target.find('.H_SlideUl').each(function(ulindex){
      console.log('넓이 ' + $(this).width())
      if(ulindex == 0){
        $(this).css('left' , $(this).width()*-2 )
      }else if(ulindex == 1){
        $(this).css('left' , $(this).width()*-1)
      }else if(ulindex == 3){
          $(this).css('left' , $(this).width()*1)
      }else if(ulindex == 4){
            $(this).css('left' , $(this).width()*2)
      }else{
        $(this).css('left' , 0)
      }
    });
  }

  var H_SlideMenuWrap = function H_SlideMenuWrap() {
    var touchsupport = ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 ||  window.navigator.msMaxTouchPoints > 0) ? true : false;
    var touchEvents = {
        touchStart:  'touchstart',
        touchMove: 'touchmove',
        touchEnd: 'touchend'
    };
    var $parent = $('.H_SlideMenuWrap');
    var arraypos = [];
    var appendCount = 0;


    var MakeClone = function(){
      $parent.each(function(index){
        var $this = $(this);
        var $target = $this.find('.H_Slide');
        var x_new, y_new;
        var set_x = 0;
        // $target.find('.H_SlideUl').clone().prependTo($target).addClass('H_left').clone().appendTo($target).removeClass('H_left').addClass('H_right');
        // $target.find('.H_SlideUl.H_left').clone().prependTo($target);
        // $target.find('.H_SlideUl.H_right').clone().appendTo($target);
        //엘리먼트 복사 기능은 vue에서 직접 추가해서 일단 필요없음

        $this.bind(touchEvents.touchStart, function (event){
          moveEvent($this);
          touchStartBind(event);
        });
        //touch start

        $this.bind(touchEvents.touchEnd, function (event){
          $(document).unbind(touchEvents.touchMove);
          $this.unbind(touchEvents.touchMove);
          moveEvent($this);
          set_x = set_x + x_new*-1;
          x_new = 0;
          y_new = 0;
        });
        //touch end

        function touchStartBind(event){
          var touch = touchsupport ? event.originalEvent.touches[0] || event.originalEvent.changedTouches[0] : event;
          var x_origine = touch.pageX;
          var y_origine = touch.pageY;

          $this.bind(touchEvents.touchMove, function(event){
            var touch2 = touchsupport ? event.originalEvent.touches[0] || event.originalEvent.changedTouches[0] : event;
            x_new = x_origine - touch2.pageX;
            y_new = y_origine - touch2.pageY;
              $target.css({
                // '-webkit-transform' : 'translate(' + (set_x + x_new*-1) + 'px,0px)',
                // 'transform' : 'translate(' + (set_x + x_new*-1) + 'px,0px)'
                '-webkit-transform' : 'translate(' + (set_x + x_new*-1)%$target.find('.H_SlideUl').eq(0).width() + 'px,0px)',
                'transform' : 'translate(' + (set_x + x_new*-1)%$target.find('.H_SlideUl').eq(0).width() + 'px,0px)'
              });
              //move
          });
          //touch move
        }
        //function (touch start)

        function moveEvent(prnt){
          var $parent = prnt;

          if($target.find('.H_SlideUl').eq(2).offset().left + $target.find('.H_SlideUl').eq(2).width()*2 < $parent.width() + $parent.width()*0.25){
            appendCount++;
            console.log('right append ' + appendCount)
            $target.find('.H_SlideUl').eq(0).appendTo($target).css('left', (appendCount * $target.find('.H_SlideUl').eq(0).width()) + $target.find('.H_SlideUl').eq(0).width()*2);

          }else if($target.find('.H_SlideUl').eq(2).offset().left > $parent.width()*0.75){
            appendCount--;
            console.log('left append ' + appendCount)
            $target.find('.H_SlideUl').eq(3).prependTo($target).css('left', (appendCount * $target.find('.H_SlideUl').eq(0).width()) - $target.find('.H_SlideUl').eq(0).width()*2);

          }
          //if

        }
        //function (touch end)

        // $target.find('.H_SlideUl').each(function(ulindex){
        //   $(this).find('>li.H_SlideLi').each(function(liindex){
        //     $(this).find('>a').on('click', function(event){
        //       console.log(' -----  set item : ' + liindex)
        //       window.localStorage.setItem('GnbHoriz', liindex)
        //     });
        //   })
        // })
        // //click event
      });
      //each
    }
    // var MakeClone
    MakeClone();

    // function ResizeFunction(ele){
    //
    // }
    //resize function
    // ResizeFunction($parent);
  }

  //
  global.hiphoperPlugin = {
    'H_SlideMenuWrap' : H_SlideMenuWrap,
    'ResizeFunction' : ResizeFunction
  }

})(this);
