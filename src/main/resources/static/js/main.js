;$(function  () {
	'use strict'

	var sidebar = $('#sidebar')
	var mask = $('#mask')
	var sidebar_trigger = $('#sidebar_trigger')
	var back_top_button = $('#back-top')

	function showSideBar () {
		mask.fadeIn()
		sidebar.css('right', 0)
	}

	function hideSideBar() {
		mask.fadeOut()
		sidebar.css('right', -sidebar.width())
	}



	sidebar_trigger.on('click', showSideBar)
	mask.on('click', hideSideBar)
	back_top_button.on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800)
	})

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > $(window).height()) {
			back_top_button.fadeIn();
		} else {
			back_top_button.fadeOut();
		}
	})

	$(window).trigger('scroll');
})