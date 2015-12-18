$(document).ready(function() {

var level = 0;
var levels = [$('.northBush'), $('.southBush'),  $('.eastBush'), $('.westBush')];



var origFoxPosTop = $('#fox').offset().top,
	origFoxPosLeft = $('#fox').offset().left;

var origFirePos = $('.fire').offset().top;


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
						  winlevel();
					}
					else {
						$('#fox').animate({top: "-=50px"}, 'fast');
					}

				break;


			// Right Arrow Pressed
			case 39:
					var fposR = $('#fox').offset().left + $('.fox').width();
					var plposR = $('.player').offset().left + $('.player').width() - $('.fox').width();
					// console.log(fposR, plposR)

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
    

    var startgame = function(e){

		$('.start').hide('fast');
		levels[level].delay(1000).fadeOut('fast');



		// var checkColl = function(){
		// 	var fireposT = $('.fire').position().top;
		// 	var fireposL = $('.fire').position().left;
		// 	var fireposB = $('.fire').position().top + $('.fox').height();
		// 	var fireposR = $('.fire').position().left + $('.fire').width();

		// 	var fposB = $('#fox').position().top + $('.fox').height();
		// 	var fposR = $('#fox').position().left + $('.fox').width();
		// 	var fposT = $('#fox').position().top;
		// 	var fposL = $('#fox').position().left;

		// 	// console.log(firepos, fposB);

		// 	//when fire moves upward
		// 	if ( fireposT < fposB){
		// 		$('.fire').stop();
		// 		$(document).off('keydown');
		// 		$('.fire').css({top: fposB});
		// 		$('.gameover').removeClass('hide');
		// 	}

		// 	//when fire moves toward left
		// 	else if (fireposL > fposR){
		// 		$('.fire').stop();
		// 		$(document).off('keydown');
		// 		$('.fire').css({top: fposB});
		// 		$('.gameover').removeClass('hide');
		// 	}

		// 	//when fire moves towards right
		// 	else if (fireposR > fposL){
		// 		$('.fire').stop();
		// 		$(document).off('keydown');
		// 		$('.fire').css({top: fposB});
		// 		$('.gameover').removeClass('hide');
		// 	}

		// 	//when fire moves downward
		// 	else if (fireposB > fposT){
		// 		$('.fire').stop();
		// 		$(document).off('keydown');
		// 		$('.fire').css({top: fposB});
		// 		$('.gameover').removeClass('hide');
		// 	}

		// }



 		$('.fire').delay(500).animate( 
 			{top:'-=700px'}, 
 			// top value needs to be fposB
 			{duration: 15000, step: function (){
 					var firepos = $('.fire').position().top;
 					var fposB = $('#fox').position().top + $('.fox').height();
 					// console.log(firepos, fposB);
 					if ( firepos < fposB){
						$('.fire').stop();
						$(document).off('keydown');
						$('.fire').css({top: fposB});
						$('.gameover').removeClass('hide');
					}	
 				}

 			} 
 		);

	};

	var winlevel = function() {
		$('.fire').stop().hide().css({top: origFirePos}).show();
		$('#fox').css({left: 0}).css({top: '45%' });
// .addClass('hide')


		$('.start').fadeIn('fast').delay(1000).on('click', function(e){

			$('.start').fadeOut('fast');

		levels[level].delay(1000).fadeIn('slow');
		level++;
		startgame().delay(1000);

		});
	};

	$('.start').on('click', startgame);






});

