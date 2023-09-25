var i = 1; 
var direction = 'forward';
var pauseCarouselButton = document.querySelector('.pauseCarouselButton')
var unpauseCarouselButton = document.querySelector('.unpauseCarouselButton')
unpauseCarouselButton.style.display="none";

var slideShowPaused = false

pauseCarouselButton.addEventListener('click', () => {
	slideShowPaused = true;
	unpauseCarouselButton.style.display="unset";
	pauseCarouselButton.style.display="none";
});
unpauseCarouselButton.addEventListener('click', () => {
	slideShowPaused = false
	pauseCarouselButton.style.display="unset";
	unpauseCarouselButton.style.display="none";
})

function cycleForward() {
	direction = 'forward'
	// Resetting all carouselBarItems to initial state
	document.getElementById('carouselBarItem1').style.background = 'unset';
	document.getElementById('carouselBarItem2').style.background = 'unset';
	document.getElementById('carouselBarItem3').style.background = 'unset';
	document.querySelector('.productCard1').style.display = 'none';
	document.querySelector('.productCard2').style.display = 'none';
	document.querySelector('.productCard3').style.display = 'none';

	// Change background of the carouselBarItem that matches current index 'i'
	document.getElementById('carouselBarItem' + i).style.background = '#a88d8d';
	document.querySelector('.productCard' + i).style.display = 'block';

	// Increase index for next cycle, if index is 3 then reset to 1
	i = i < 3 ? ++i : 1;
}

function cycleBackward() {
	direction = 'backward'
	// Resetting all carouselBarItems to initial state
	document.getElementById('carouselBarItem1').style.background = 'unset';
	document.getElementById('carouselBarItem2').style.background = 'unset';
	document.getElementById('carouselBarItem3').style.background = 'unset';
	document.querySelector('.productCard1').style.display = 'none';
	document.querySelector('.productCard2').style.display = 'none';
	document.querySelector('.productCard3').style.display = 'none';

	// Change background of the carouselBarItem that matches current index 'i'
	document.getElementById('carouselBarItem' + i).style.background = '#a88d8d';
	document.querySelector('.productCard' + i).style.display = 'block';

	// Decrease index for next cycle, if index is 1 then reset to 3
	i = i > 1 ? --i : 3;
}

cycleForward()
cycleForward()
document.querySelector('.carouselBarItemArrowLeft').addEventListener('click', () => {
	cycleBackward()
})
document.querySelector('.carouselBarItemArrowRight').addEventListener('click', () => {
	cycleForward()
})
setInterval(function(){
	if (slideShowPaused != true) {
		cycleForward()
	}
}, 10000)
var cardElements = document.querySelectorAll('.productCard'); // Replace .yourclass with your selector
cardElements.forEach((elem) => {
	elem.style.backgroundImage = 'url(' + elem.getAttribute('background'); + ')';
})