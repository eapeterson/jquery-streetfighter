$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});
	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1050px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '550px');
		});
	});
	$('.ryu').mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	$(document).keydown(function(event) {
		console.log(event.which);
		if (event.which == 88) {
			console.log("X key pressed");
			$('.ryu-action').hide();
			$('.ryu-cool').show();
		};

	});
	$(document).keyup(function(event) {
		console.log(event.which);
		if (event.which == 88) {
			console.log("X key released");
			$('.ryu-action').hide();
			$('.ryu-still').show();
		};
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}