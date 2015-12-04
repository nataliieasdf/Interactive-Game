$(document).ready(function() {

// var levels = []
//


	//Fox ready
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('#fox').animate({left: "-=50px"}, 'fast');

				var fposL = $('#fox').offset().left;
					console.log(fposL);
				break;



			// Up Arrow Pressed
			case 38:
				$('#fox').animate({top: "-=50px"}, 'fast');
					var fposT = $('#fox').offset().top;
					console.log(fposT);

					// if (fposT <= $('#fox').width() ){
						//stop ability to move up -- fix top position?
						// alert('stop moving')
					// }

				break;



			// Right Arrow Pressed
			case 39:
				$('#fox').animate({right: "-=50px"}, 'fast');
					var fposR = $('#fox').offset().left + $('.fox').width();
					console.log(fposR);

				break;

			// Down Arrow Pressed
			case 40:
				$('#fox').animate({top: "+=50px"}, 'fast');
					var fposB = $('#fox').offset().top + $('.fox').height();
					console.log(fposB);
				break;
		}
	});
    

	$('.start').on('click', function(e){

		var firepos = $('.fire').offset().top;
		console.log(firepos);


		$('.fire').delay(500).animate({top:'-=500px'}, 10000);


		$('.westBush').delay(1000).fadeOut('fast');
		
		$('.start').hide('fast');



	});





});

//Score counter - every level completed, add 1



// Collision http://stackoverflow.com/questions/5419134/how-to-detect-if-two-divs-touch-with-jquery



// How to make levels
// How to stop movement
// Collision help