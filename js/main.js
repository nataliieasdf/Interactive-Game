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

		$('.start').hide('fast');
		$('.westBush').delay(1000).fadeOut('fast');
		



		// var firepos = $('.fire').offset().top;
		// console.log(firepos);

		var $fire = $('.fire');

		$fire.delay(500).animate({top:'-=500px'}, 10000);

		function getPosition(){
			console.log($fire.css('top') );
			window.requestAnimationFrame(getPosition);
		}


	});

	// var overlaps = (function(){
	// 	function getPosition(elem){
	// 		var pos = $('#fox').position(),
	// 		width = $('#fox').width(),
	// 		height = $('#fox').height();
	// 		return [ [pos.left, pos.left + width], [pos.top, pos.top + height] ];
	// 	}
	// });






});

//Score counter - every level completed, add 1



// Collision http://stackoverflow.com/questions/5419134/how-to-detect-if-two-divs-touch-with-jquery



// How to make levels
// How to stop movement
// Collision help