var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

$(document).ready(function() {

    $(".slideshow-container").on("swipeleft", function plusSlides(n) {
        showSlides(slideIndex += 1);
    });

    $(".slideshow-container").on("swiperight", function plusSlides(n) {
        showSlides(slideIndex += -1);
    });

});

function toggleFullScreen () {


if ( isFullScreenCompatible ) {

if ( !isFullScreen())
enterFullScreen(document.getElementById("fs-image"));

else
exitFullScreen();
}

else
alert('Votre navigateur n\'accepte pas le passage en plein écran');
}

function isFullScreenCompatible () {
return document.fullscreenEnabled ||
document.webkitFullscreenEnabled ||
document.mozFullScreenEnabled ||
document.msFullscreenEnabled;
}

function isFullScreen () {
return document.FullscreenElement ||
document.mozFullScreenElement ||
document.webkitFullscreenElement ||
document.msFullscreenElement;
}

function enterFullScreen (el) {

if(el.requestFullscreen) {

el.requestFullscreen();
} else if(el.mozRequestFullScreen) {

el.mozRequestFullScreen();
} else if(el.webkitRequestFullscreen) {

el.webkitRequestFullscreen();
} else if(el.msRequestFullscreen) {

el.msRequestFullscreen();
}
}

function exitFullScreen () {

if(document.exitFullscreen) {

document.exitFullscreen();
} else if(document.mozCancelFullScreen) {

document.mozCancelFullScreen();
} else if(document.webkitExitFullscreen) {

document.webkitExitFullscreen();
}
}
