$(document).ready(function() {
	// Set options
	var speed = 500;
	var autoswitch = true;
	var autoswitch_speed = 4000;

	//add initial active class
	$('.slide').first().addClass('active')

	// Hide All slides
	$('.slide').hide();

	//Show First slide
	$('.active').show();

	//Next Handler
	$('#Next').on('click', nextSlide);

	//Preveous Slide
	$('#prev').on('click', 'previousSlide');

	//Auto Slider
	if(autoswitch == true){
		setInterval(nextSlide, autoswitch_speed);
	}

	// Switch to the next slide
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);

	}

	//switch to previous slide 
	function previousSlide(argument) {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});