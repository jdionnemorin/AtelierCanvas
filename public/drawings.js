
var downloadCanvas = function() {
	var canvasUrl = canvas.toDataURL('image/png');

	/* Change MIME type to trick the browser to download the file instead of displaying it */
	canvasUrl = canvasUrl.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');

	/* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
	canvasUrl = canvasUrl.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');

	this.href = canvasUrl;
};

document.addEventListener("DOMContentLoaded", function() {


	
	function mainLoop() {



		setTimeout(mainLoop, 25);
	}
	mainLoop();
});