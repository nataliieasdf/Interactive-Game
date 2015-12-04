$(document).ready(function() {

// var levels = []
//


	//Fox ready
    $(document).on('keydown', function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				

				var fposL = $('#fox').offset().left;
				var plposL = $('.player').offset().left;
				console.log(fposL, plposL);

					if (fposL <= plposL){
						//stop ability to move up
						 $('#fox').css({right: -plposL});
					}
					else {
						$('#fox').animate({left: "-=50px"}, 'fast');
					}

				break;



			// Up Arrow Pressed
			case 38:
					var fposT = $('#fox').offset().top;
					var plposT = $('.player').offset().top;
					console.log(fposT, plposT);

					if (fposT <= plposT){
						//stop ability to move up
						 $('#fox').animate({top: "0px"}, 'fast');
					}
					else {
						$('#fox').animate({top: "-=50px"}, 'fast');
					}

				break;


			// Right Arrow Pressed
			case 39:
					var fposR = $('#fox').offset().left + $('.fox').width();
					var plposR = $('.player').offset().left + $('.player').width() - $('.fox').width();
					console.log(fposR, plposR)

					if (fposR >= plposR){
						//stop ability to move up
						 $('#fox').animate({right: -fposR}, 'fast');
						 // - "$('.fox').width()" +"px"
					}
					else {
						$('#fox').animate({right: "-=50px"}, 'fast');
					}


				break;

			// Down Arrow Pressed
			case 40:
				$('#fox').animate({top: "+=50px"}, 'fast');
					var fposB = $('#fox').offset().top + $('.fox').height();
				break;
		}
	});
    

	$('.start').on('click', function(e){

		$('.start').hide('fast');
		$('.northBush').delay(1000).fadeOut('fast');
		

		// var firepos = $('.fire').offset().top;
		// console.log(firepos);
		$('.fire').delay(500).animate({top:'-=500px'}, 10000);

	});

	if ( $('.fire').collision('#fox') ){
		alert("Gameover!")
	}


});

//Score counter - every level completed, add 1



// Collision http://stackoverflow.com/questions/5419134/how-to-detect-if-two-divs-touch-with-jquery



// How to make levels
// How to stop movement
// Collision help