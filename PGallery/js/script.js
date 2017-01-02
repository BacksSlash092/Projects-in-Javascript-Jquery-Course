$(document).ready(function(){
	$('nav a').on('click', function(){
		//Current class Assigment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current')

		//Set Heading Text
		$('h1.heading').text($(this).text());

		//Get & filter link text
		var category = $(this).text().toLowerCase().replace(' ', '-');

		//Remove Hidden Class if 'All Projects is selected'
		if(category == 'all-projects'){
			$('ul#gallery li:Hidden').fadeIn('slow').removeClass('hidden');
		} else { 

			$('ul#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				} else{
					$(this).fadeIn('slow').removeClass('hidden');
				}
			})
		}
		//stop link behaviour 
		return false;
	});

	$('ul#gallery li').on('mouseenter', function(){

		// Get data attributes
		var title =$(this).children().data('title');
		var desc =$(this).children().data('desc');

		//validation
		if(desc==null){
			desc == 'Click to Enlarge';
		}

		if(title==null){
			title='';
		}

		//Create Overlay Div
		$(this).append('<div class="overlay"></div>');

		//Get overlay Div
		var overlay = $(this).children('.overlay');

		//Add HTML TO Overlay 
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

		//Fade in Overly
		overlay.fadeIn(800);
	});


	$('ul#gallery li').on('mouseleave', function(){
		//Create Overlay Div
		$(this).append('<div class="overlay"></div>');

		//Get overlay Div
		var overlay = $(this).children('.overlay');

		//Fade out Overlay
		overlay.fadeOut(500);
	});
});