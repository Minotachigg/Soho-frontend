
// ***************************nav bar******************************************************
window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    document.querySelector(".nav_wrapper").classList.add("scrolled");
  } else {
    document.querySelector(".nav_wrapper").classList.remove("scrolled");
  }
});


// ******************************about slider*****************************************************************
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
  var slides = document.getElementsByClassName("my_slides");
  var dots = document.getElementsByClassName("slider_dot");
  
  if (n > slides.length) {
    slideIndex = 1
  }else if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

