$(document).ready(function () {
	
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var headerHeight = $('.navbar').outerHeight();
	var landingHeight = $('.jumbotron').outerHeight();
	

	// paralax background effect
	$('section[data-type="background"]').each(function () {
		var bgObj = $(this);
		$(window).scroll(function () {
			var yPos = -($(window).scrollTop() / bgObj.data('speed'));
			var coordinates = '50% ' + yPos + 'px';

			bgObj.css({
				backgroundPosition: coordinates
			});
		});
	});

	$(window).resize(function() {
		headerHeight = $('.navbar-wrapper').outerHeight();
	});

	var backgroundImages = ['http://octoberbeatz.com/wp-content/uploads/2016/09/October-beatz.png', 'http://octoberbeatz.com/wp-content/uploads/2016/09/New-Dawn.png', 'http://octoberbeatz.com/wp-content/uploads/2016/09/Media_Beatz.png'];
	var i = 0;
	setTimeout(function () {
		$('.jumbotron flex').css('background-image', 'url: (' + backgroundImages[i] + ')');
		i++;
	}, 2000);
});