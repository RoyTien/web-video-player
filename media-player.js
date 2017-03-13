(function localFileVideoPlayer() {
	'use strict'
  
  var displayMessage = function (message, isError) {
    var element = document.querySelector('#message')
    element.innerHTML = message
    element.className = isError ? 'error' : 'info'
  }
  var playSelectedFile = function (event) {
    var file = this.files[0]
    var type = file.type
    var videoNode = document.querySelector('video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'
    var message = 'Can play type "' + type + '": ' + canPlay
    var isError = canPlay === 'no';
    displayMessage(message, isError)

    if (isError) {
      return
    }

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL;

    var mediaPlayer = document.getElementById('myVid');
    var playPauseBtn = document.getElementById('play-pause-button');

    // Add a listener for the play and pause events so the buttons state can be updated
    mediaPlayer.addEventListener('play', function() {
      // Change the button to be a pause button
      changeButtonType(playPauseBtn, 'pause');
    }, false);
    mediaPlayer.addEventListener('pause', function() {
      // Change the button to be a play button
      changeButtonType(playPauseBtn, 'play');
    }, false);

    function togglePlayPause() {
      // If the mediaPlayer is currently paused or has ended
      if (mediaPlayer.paused || mediaPlayer.ended) {
        // Change the button to be a pause button
        changeButtonType(playPauseBtn, 'pause');
        // Play the media
        mediaPlayer.play();
      }
      // Otherwise it must currently be playing
      else {
        // Change the button to be a play button
        changeButtonType(playPauseBtn, 'play');
        // Pause the media
        mediaPlayer.pause();
      }
    }


  }

  var URL = window.URL || window.webkitURL;
  var inputNode = document.querySelector('input');
  inputNode.addEventListener('change', playSelectedFile, false);
})()


