var slideIndex = 0;
showSlides();

// slideshow function
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// navigation function to activate button onclick
var header = document.getElementsByClassName("navbar");
var btns = document.getElementsByClassName("nav");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// navigation function hide & show onscroll
window.onscroll = function() {navfunction(x)};

var prevScrollpos = window.pageXOffset;
var x = window.matchMedia("(max-width:1000px)")
x.addListener(navfunction)

function navfunction(x) {
  var currentScrollPos = window.pageYOffset;
  var x = window.matchMedia("(max-width:1000px)")
  if(x.matches){
    return 0;
  }
  else if (prevScrollpos > currentScrollPos) {
    document.getElementById("myTopnav").style.top = "0px";
  } else {
    document.getElementById("myTopnav").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

//responsive navigation function
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Go to top function
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction(),navfunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// change color of resposiive navbar
function change_color() {
  document.getElementById("navid").style.color = "white";
}