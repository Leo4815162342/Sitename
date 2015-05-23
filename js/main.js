$(document).ready(function () {	
	$("#main-slider").responsiveSlides({
	auto: true,
	nav: true,
	speed: 700,
	timeout: 99000,
	pause: false,
	navContainer: ".nav-container", 
	prevText: "",
	nextText: ""
	});
	var nav = $('.main-nav'),
		navElems = $('.main-nav a');
	$(window).on('load resize', function(){
		var condition = ($(this).width() + scrollbarWidth()) < 768;
		if (condition) {
			nav.insertAfter($('header')).removeClass('nav-anim');
		} else {
			navElems.attr('style', '');
			nav.insertAfter($('.site-name')).addClass('nav-anim');
		}
	});
	function scrollbarWidth() {
		var $inner = $('<div style="width: 100%; height:200px;">test</div>'),
			$outer = $('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner),
			inner = $inner[0],
			outer = $outer[0];				 
		$('body').append(outer);
		var width1 = inner.offsetWidth;
		$outer.css('overflow', 'scroll');
		var width2 = outer.clientWidth;
		$outer.remove();			 
		return (width1 - width2);
	};
	$('.nav-toggle').on('click', function(){
		navElems.each(function(i){
			var condit = $(this).width();
			// $('.main-nav').css({
			// 	zIndex : condit === 0 ? '10' : '1'
			// })
			$(this).css({
				top : 50 * i + 1 * i,
				right: condit === 0 ? "" : 0
			})
			.delay(100*i).animate({						
				width : condit === 0 ? '100%' : 0
			},200);
		});
	});			
});
(function($) {
	$.fn.hasScrollBar = function() {
		return this.get(0).scrollHeight > this.get(0).clientHeight;
	}
})(jQuery);