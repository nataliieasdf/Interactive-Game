$(document).ready(function() {

var level = 0;
var levels = [$('.northBush'), $('.southBush'),  $('.eastBush'), $('.westBush')];
 
 // to make the levels variable array, do I need to create a function 
 // that checks the fox location and the hidden bush location?
 // eg var goNorth = check fox @ top: 0 ... for each direction
// var levels = ['goNorth', 'goEast', 'goWest', 'goSouth'];

// var levels = []

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


		$('.start').fadeIn('fast');

		levels[level].delay(2000).fadeIn('slow');
		level++;
		startgame();
	};

	$('.start').on('click', startgame);



});

//Score counter - every level completed, add 1



// How to make levels
