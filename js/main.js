$(document).ready(function() {

	//Fox ready
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('#fox').animate({left: "-=50px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('#fox').animate({top: "-=50px"}, 'fast');
					var dist = $('#fox').position().top;
					console.log(dist);
				break;
			// Right Arrow Pressed
			case 39:
				$('#fox').animate({left: "+=50px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('#fox').animate({top: "+=50px"}, 'fast');
				break;
		}
	});
    

	$('.start').on('click', function(e){

		$('.fire').animate({top:'-=500px'}, 10000);

		$('.northBush').delay(500).fadeOut('fast');
	});



});





// Collision http://stackoverflow.com/questions/5419134/how-to-detect-if-two-divs-touch-with-jquery