"use strict";

var myVideo = document.getElementById("myVideo");

var curTime = document.getElementById('current-time');
var durTime = document.getElementById('duration-time');
var playPauseBtn = document.getElementById('play-pause-button');
var progressBar = document.getElementById('progress-bar');
var rangeSlider = document.getElementById('range-slider');

var previousFrame = document.getElementById('previous-frame');
var nextFrame = document.getElementById('next-frame');
var frameTime = 1 / 25;

previousFrame.addEventListener('click',function(){
	myVideo.pause();
	if(myVideo.currentTime > 0){
		myVideo.currentTime = myVideo.currentTime - frameTime;
	}
},false);

nextFrame.addEventListener('click',function(){
	myVideo.pause();
	if(myVideo.currentTime < myVideo.duration){
		myVideo.currentTime = myVideo.currentTime + frameTime;
	}
},false);

// Wait for the data to be loaded before initialising time
myVideo.addEventListener('loadeddata', function() {
	if(myVideo.readyState >= 2) {
		curTime.innerHTML = formatTime(myVideo.currentTime);
		durTime.innerHTML = formatTime(myVideo.duration);
	}
	setupRangeSlider();
});

// Add a listener for the timeupdate events so the currentTime can be updated
myVideo.addEventListener("timeupdate", function(){
	curTime.innerHTML = formatTime(myVideo.currentTime);
});

// Add a listener for the play and pause events so the buttons state can be updated
myVideo.addEventListener('play', function() {
	// Change the button to be a pause button
	changeButtonType(playPauseBtn, 'pause');
}, false);

myVideo.addEventListener('pause', function() {
	// Change the button to be a play button
	changeButtonType(playPauseBtn, 'play');
}, false);

// Add a listener for the timeupdate event so we can update the progress bar
myVideo.addEventListener('timeupdate', updateProgressBar, false);

// Update the progress bar
function updateProgressBar() {
	// Work out how much of the media has played via the duration and currentTime parameters
	var percentage = Math.floor((100 / myVideo.duration) * myVideo.currentTime);
	// Update the progress bar's value
	progressBar.value = percentage;
	// Update the progress bar's text (for browsers that don't support the progress element)
	progressBar.innerHTML = percentage + '% played';
}

// Setup the range slider
function setupRangeSlider(){
	rangeSlider.min = myVideo.currentTime;
	rangeSlider.max = myVideo.duration;
	rangeSlider.value = myVideo.currentTime;
}

myVideo.addEventListener('timeupdate', updateRangeSlider, false);

function updateRangeSlider(){
	rangeSlider.value = myVideo.currentTime;
}


rangeSlider.addEventListener('change',function(){
	myVideo.currentTime = rangeSlider.value;
},false);


function changeButtonType(btn, value) {
	btn.title = value;
	btn.innerHTML = value;
	btn.className = value;
}

function togglePlayPause() {
	// If the myVid is currently paused or has ended
	if (myVideo.paused || myVideo.ended) {
		// Change the button to be a pause button
		changeButtonType(playPauseBtn, 'pause');
		// Play the media
		myVideo.play();
	}
	// Otherwise it must currently be playing
	else {
		// Change the button to be a play button
		changeButtonType(playPauseBtn, 'play');
		// Pause the media
		myVideo.pause();
		console.log(myVideo.currentTime);
	}
}


// Stop the current media from playing, and return it to the start position
function stopPlayer() {
	myVideo.pause();
	myVideo.currentTime = 0;
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