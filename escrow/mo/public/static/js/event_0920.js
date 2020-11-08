'use strict';
(function (global) {
    var
        $window = $(window),
        html = document.documentElement,
        $html = $(html),
        body,
        $body;

	var fallin0920 = function fallin() {

		var $userAgent;

		$userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

        if ($('.fallin').length) {
			if(!$userAgent){
				
			}else{
				
			}
	        
    	}    	

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
	}

	global.hiphoperEvent = {       

        'fallin0920': fallin0920,
	};

})(this);

hiphoperEvent.fallin0920();



