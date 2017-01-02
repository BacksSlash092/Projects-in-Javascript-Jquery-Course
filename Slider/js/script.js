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

	$('#Next').on('click', function(){
		alert('fvf');
	});
});