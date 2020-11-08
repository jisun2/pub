function floatingFn(){
  mCheck = function(e){
		var check = false;
		if($(window).width() < 426){
			check = true;
			if($.browser.desktop){
				check = false;
			}
		}
		return check;
	}
  if(!mCheck()){
      // alert(222)
      $(window).on('scroll', function(){
          var $floating = $('#floating')
          if ($floating.length > 0) {
              var $fix = $floating.find('.event_view_floating'),
                  $btns = $floating.find('.sort a'),
                  objTop = $floating.offset().top,
                  winTop = $(window).scrollTop(),
                  winLeft = $(window).scrollLeft();
              if (objTop <= winTop) {
                  $fix.addClass('fix');
              } else {
                  $fix.removeClass('fix');
              }
              $btns.each(function (i, el) {
                  if ($(el).data('top') * 1 - 99 <= winTop) {
                      $btns.removeClass('tc_3');
                      $(el).addClass('tc_3');
                  }
              });
              if (winTop == $(document).height() - $('body').height()) {
                  $btns.removeClass('tc_3');
                  $btns.last().addClass('tc_3');
              }
              if ($fix.hasClass('fix')) {
                  $fix.css('transform', 'translateX(-' + winLeft + 'px)');
              }
          }
      });

  }else{
      // alert(111)
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('header').outerHeight();
      $(window).scroll(function(event) {
          didScroll = true;
      });
      setInterval(function() {
          if (didScroll) {
              hasScrolled();
              didScroll = false;
          }
      }, 250);

      function hasScrolled() {
          var st = $(this).scrollTop();

          if (Math.abs(lastScrollTop - st) <= delta) return;

          if(st == 0){
              $('._button_top_wrap').fadeOut('fast');
          }

          if (st > lastScrollTop && st > navbarHeight) {
              $('._button_top_wrap').fadeIn('fast');
              if ($('.top_banner').hasClass('hide')){
                  $('.site_header').removeClass('nav-down').addClass('nav-up');
                  $('.H_SlideMenuWrap').removeClass('nav-down').addClass('nav-up');
                  $('.bar_tabnav').removeClass('nav-down').addClass('nav-up');
                  $('._button_top_wrap').removeClass('nav-down').addClass('nav-up');
              }else{
                  $('.site_header').removeClass('nav-down').addClass('nav-up2');
                  $('.H_SlideMenuWrap').removeClass('nav-down').addClass('nav-up2');
                  $('.bar_tabnav').removeClass('nav-down').addClass('nav-up');
                  $('._button_top_wrap').removeClass('nav-down').addClass('nav-up');
              }
          } else {
              
              if (st + $(window).height() < $(document).height()) {
                  if ($('.top_banner').hasClass('hide')) {
                      $('.site_header').removeClass('nav-up').addClass('nav-down');
                      $('.H_SlideMenuWrap').removeClass('nav-up').addClass('nav-down');
                      $('.bar_tabnav').removeClass('nav-up').addClass('nav-down');
                      $('._button_top_wrap').removeClass('nav-up').addClass('nav-down');
                  }else{
                      $('.site_header').removeClass('nav-up2').addClass('nav-down');
                      $('.H_SlideMenuWrap').removeClass('nav-up2').addClass('nav-down');
                      $('.bar_tabnav').removeClass('nav-up').addClass('nav-down');
                      $('._button_top_wrap').removeClass('nav-up').addClass('nav-down');
                  }
              }
          }
          lastScrollTop = st;
      }
  }
}

//localStorage, sessionStorage 또는 쿠키 중요
// $(document).ready(function() {
//     var loaddd = 1;
//     $(window).scroll(function() {
//         if($(window).scrollTop() == $(document).height() - $(window).height()) {
//             //alert("땅끝마을");
//             console.log(++loaddd);
//             $('.loadscroll').append('<div class="test">test' + loaddd + '</div>')
//         }
//     });
// });
$(document).ready(function() {
    var loaddd = 1;
    $(window).scroll(function() {
        console.log( Math.ceil($(window).scrollTop()) + " >= " + ($(document).height() - $(window).height()) );
        if ( Math.ceil($(window).scrollTop()) >= ($(document).height() - $(window).height()) ) {
            $('.loadscroll').append('<div class="test">test_' + ++loaddd + '</div>')
        }
    });
});

$(window).on({
  //'scroll.floating':floatingFn,
  'load.floating':floatingFn,
  // 'click.floating':function(e){
  //   var $this = $(e.target);
  //   if($this.closest('#floating').hasClass('wrap_event_view_floating') && $this.is('a')){
  //     e.preventDefault();
  //     var t = $($this.attr('href')).closest('.wrap_listproduct'),
  //       v = t.offset().top,
  //       v2 = mCheck()?55:99;
  //     $this.data('top',v);
  //     $(window).scrollTop(v-v2);
  //   }
  // }
})
