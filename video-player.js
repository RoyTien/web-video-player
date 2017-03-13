var VidPlayer = (function () {
    function VidPlayer(url) {
        this.displayMessage = function (message, isError) {
            var element = document.querySelector('#message');
            element.innerHTML = message;
            element.className = isError ? 'error' : 'info';
        };
        this.playSelectedFile = function (event) {
            var file = this.files[0];
            var type = file.type;
            var videoNode = document.querySelector('video');
            var canPlay = videoNode.canPlayType(type);
            if (canPlay === '')
                canPlay = 'no';
            var message = 'Can play type "' + type + '": ' + canPlay;
            var isError = canPlay === 'no';
            this.displayMessage(message, isError);
            if (isError) {
                return;
            }
            var fileURL = this.myURL.createObjectURL(file);
            videoNode.src = fileURL;
        };
        this.myURL = url;
    }
    ;
    return VidPlayer;
}());
var vidPlayer = new VidPlayer(window.URL || window.webkitURL);
var inputNode = document.querySelector('input');
inputNode.addEventListener('change', vidPlayer.playSelectedFile(), false);
