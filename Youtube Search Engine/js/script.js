//Searchbar Handler
$(function(){

	var searchField= $('#query');
	var icon = $('#search-btn');

	//Focus HAndler
	$(searchField).on('focus', function(){

		$(this).animate({
			width:'100%'
		}, 400);
		$(icon).animate({
			right:'10px'
		},400)
	});


	//Blur Event handler
	$(searchField).on('blur', function(){
		if(searchField.val()==''){
			$(searchField).animate({
				width:'45%'

			},400, function() {});

			$(icon).animate({

				right:'360%'
			
		},400, function() {});

		}
	}); 

});	


function search(){
	//Clear Results
	$('#results').html('');
	$('#buttons').html('')

	//Get Form input
	q = $('query').val();
	$.get("https://www.googleapis.com/youtube/v3/search",{
		part:'snippet, id',
		q:q,
		type:'video',
		key:'AIzaSyAHh9w_8v2v8j0ma1hVQ9t8AMX-P0V72b0'},
		function(data){
			var  nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;

			console.log(data);

			$.
		}


	})
}