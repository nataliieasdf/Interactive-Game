$(window).on('scroll', function(e){

	var px = $(window).scrollTop();
	// will get how many pixels the scroll bar is from the top

	var orgtop = $('.statue')

	// console.log(px);

	$('.box').css('transform', 'rotate(' + px + ' deg)');

	if (px >500 && px < 1000){
		$('.box').css('background', 'blue');
	}

	else{
		$('.box').css('background', 'red');
	}

	$('.statue').css('top', px/5)

});







$(window).on('resize', function(e){

	var h = $(window).height();
	var w = $(window).width();

	console.log(w + " x " + h);

});