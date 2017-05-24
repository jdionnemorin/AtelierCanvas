

document.addEventListener("DOMContentLoaded", function() {


	
	function mainLoop() {



		setTimeout(mainLoop, 25);
	}
	mainLoop();
});