// HERO SLIDER

// var cards = document.querySelectorAll(".slider__card");

// // Clone cards and append 
// cards.forEach(function(card) {
//     var cardCopy = card.cloneNode(true);
//     document.querySelector(".slider__wrapper").appendChild(cardCopy);
// });


// APPOINTMENT SLIDESHOW

const counter = document.getElementById("slideCount");
const nexttButton = document.querySelector("#nextButton")
const previousButton = document.querySelector("#prevButton")
let slideNumber = 1;

nextButton.onclick = addCount;
previousButton.onclick = subtractCount;

function addCount() {
    if (slideNumber < 9) {
        slideNumber++
    counter.innerText = "0" + slideNumber;
}
}

function subtractCount() {
  if (slideNumber <= 1) {
    slideNumber = 1;
  } else {
    slideNumber-- }
  counter.innerText = "0" + slideNumber;
}

let currIndex = 0;

// function selectSlide(n) {
//     let i;
//     let slides = document.getElementsByClassName("slide__card");
   

//     for (i = 0; i < slides.length; i++) {
//         slides[i].className = slides[i].className.replace(" active", "");
//   }

  const slideWrapper = document.getElementById("slideGroup");
  const cardImage = header.getElementsByClassName("slide__image");
  for (i = 0; i < cardImage.length; i++) {
    cardImage[i].className = cardImage[i].className.replace(" active", "");
    
  }

////

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slide__card");
 
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }







// const myTest = document.getElementById("testMe");
// const testButton = document.getElementById("testButton"); 

// testButton.onclick = addTest;

// function addTest() {
//   myTest.innerText = "TEST";
// }