
// Scroll Header

window.onscroll = function() {myFunction()};

var headerD = document.querySelector('.header-desktop'); 
var headerN16 = document.querySelector('.header-notebook16');
var headerN13 = document.querySelector('.header-notebook13');
var headerT = document.querySelector('.header-tablet');
var headerM = document.querySelector('.header-mobile');

var headerWrap = document.querySelector('.header-wrap');
var sticky = headerD.offsetTop; 
var section = document.querySelector('.first-screen');

function myFunction() {
	if (window.pageYOffset > sticky) {
		headerD.classList.add("see");
		headerN16.classList.add("see");
		headerN13.classList.add("see");
		headerT.classList.add("see");
		headerM.classList.add("see");
	} else {
		headerD.classList.remove("see");
		headerN16.classList.remove("see");
		headerN13.classList.remove("see");
		headerT.classList.remove("see");
		headerM.classList.remove("see");
	}
};



// var mediaQuery = window.matchMedia("screen and (min-width: 768px)");
// mediaQuery.addListener(foo);
// foo(mediaQuery);

// function foo(mq) {
    
// }



// ==========