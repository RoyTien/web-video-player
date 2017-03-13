"use strict";

var myVideo = document.getElementById("myVideo");

var curTime = document.getElementById('current-time');
var durTime = document.getElementById('duration-time');
var playPauseBtn = document.getElementById('play-pause-button');

// Wait for the data to be loaded before initialising time
myVideo.addEventListener('loadeddata', function() {
	if(myVideo.readyState >= 2) {
		curTime.innerHTML = formatTime(myVideo.currentTime);
		durTime.innerHTML = formatTime(myVideo.duration);
	}
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
	}
}

// Stop the current media from playing, and return it to the start position
function stopPlayer() {
	myVideo.pause();
	myVideo.currentTime = 0;
}

// Covert the time from seconds to mm:ss
function formatTime(seconds) {
	var minutes = Math.floor(seconds / 60);
	minutes = (minutes >= 10) ? minutes : "0" + minutes;
	var seconds = Math.floor(seconds % 60);
	seconds = (seconds >= 10) ? seconds : "0" + seconds;
	return minutes + ":" + seconds;
}

