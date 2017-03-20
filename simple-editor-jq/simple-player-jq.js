$(document).ready(function(){

var $myVid = $('#myVideo')[0];
var $playPauseBtn = $('#play-pause-button')[0];
var $curTime = $('#current-time')[0]; 
var $durTime = $('#duration-time')[0];
var $FRAMETIME = 1 / 25;

var $progressBar = $('#progress-bar')[0];
var $rangeSlider = $('#range-slider')[0];


$('#previous-frame').click(function(event) {
	$myVid.pause();
	if($myVid.currentTime > 0){
		$myVid.currentTime = $myVid.currentTime - $FRAMETIME;
	}
});

$('#next-frame').click(function(event) {
	$myVid.pause();
	if($myVid.currentTime < $myVid.duration){
		$myVid.currentTime = $myVid.currentTime + $FRAMETIME;
	}
});


$('#range-slider').change(function(event) {
	$myVid.currentTime = $rangeSlider.value;
});


$('#myVideo').bind({
	//
	'loadeddata': function(event) {
		event.preventDefault();
		if($myVid.readyState >= 2) {
			$curTime.innerHTML = formatTime($myVid.currentTime);
			$durTime.innerHTML = formatTime($myVid.duration);

			setupRangeSlider();
		}
	},
	// Update Current TIme
	"timeupdate": function(){

		// Update Current Time
		$curTime.innerHTML = formatTime($myVid.currentTime);

		// Update Progress Bar

		// Work out how much of the media has played via the duration and currentTime parameters
		var percentage = Math.floor((100 / $myVid.duration) * $myVid.currentTime);
		// Update the progress bar's value
		$progressBar.value = percentage;
		// Update the progress bar's text (for browsers that don't support the progress element)
		$progressBar.innerHTML = percentage + '% played';

		// Update Range Slider
		$rangeSlider.value = $myVid.currentTime;
	},

});



$('#play-pause-button').click(function(event) {
	// If the myVid is currently paused or has ended
	if ($myVid.paused || $myVid.ended) {
		// Change the button to be a pause button
		changeButtonType($playPauseBtn, 'Pause');
		// Play the media
		$myVid.play();
	}
	// Otherwise it must currently be playing
	else {
		// Change the button to be a play button
		changeButtonType($playPauseBtn, 'Play');
		// Pause the media
		$myVid.pause();
	}
});

// Stop the current media from playing, and return it to the start position
$('#stop-button').click(function(event) {
	$myVid.pause();
	$myVid.currentTime = 0;
});


function changeButtonType(btn, value) {
	btn.title = value;
	btn.innerHTML = value;
	btn.className = value;
}


// Covert the time from seconds to mm:ss:ms
function formatTime(initiationTime) {
	var hours = Math.floor(initiationTime / 3600);
	hours = (hours >= 10) ? hours : "0" + hours;
	var minutes = (Math.floor((initiationTime / 60) % 60));
	minutes = (minutes >= 10) ? minutes : "0" + minutes;
	var seconds = Math.floor(initiationTime) % 60;
	seconds = (seconds >= 10) ? seconds : "0" + seconds;
	return hours + ":" + minutes + ":" + seconds;
}


function setupRangeSlider(){
	$rangeSlider.min = $myVid.currentTime;
	$rangeSlider.max = $myVid.duration;
	$rangeSlider.value = $myVid.currentTime;
}











});

