class VidPlayer {

	private myURL: URL;
	constructor(url: URL){
		this.myURL = url;
	};

	public displayMessage = function(message: string, isError: any): void{
		var element = document.querySelector('#message');
		element.innerHTML = message;
		element.className = isError ? 'error' : 'info';
	};

	public playSelectedFile = function(event: Event):void {
		let file = this.files[0];
		let type = file.type;
		let videoNode = document.querySelector('video');
		let canPlay = videoNode.canPlayType(type);
		if (canPlay === '') canPlay = 'no';
		let message = 'Can play type "' + type + '": ' + canPlay;
		let isError = canPlay === 'no';
		this.displayMessage(message, isError);

		if (isError) {
			return
		}

		let fileURL = this.myURL.createObjectURL(file);
		videoNode.src = fileURL
	};
	
}


let vidPlayer = new VidPlayer(window.URL || (window as any).webkitURL);


let inputNode = document.querySelector('input');

inputNode.addEventListener('change', vidPlayer.playSelectedFile(), false)
