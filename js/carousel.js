// HERO SLIDER

var cards = document.querySelectorAll(".slider__card");

// Clone cards and append 
cards.forEach(function(card) {
    var cardCopy = card.cloneNode(true);
    document.querySelector(".slider__wrapper").appendChild(cardCopy);
});


// APPOINTMENT SLIDESHOW

// const counter = document.getElementById("slideCount");
// const nextButton = document.querySelector("#nextButton")
// const previousButton = document.querySelector("#prevButton")
// let slideNumber = 1;

// nextButton.onclick = addCount;
// previousButton.onclick = subtractCount;

// function addCount() {
//     if (slideNumber < 9) {
//         slideNumber++
//     counter.innerText = "0" + slideNumber;
// }
// }

// function subtractCount() {
//   if (slideNumber <= 1) {
//     slideNumber = 1;
//   } else {
//     slideNumber-- }
//   counter.innerText = "0" + slideNumber;
// }



let currIndex = 1;
const slider = document.querySelector('.slideshow__cards-group');
const cardImage = slider.getElementsByClassName("slide__card");
const counter = document.getElementById("slideCount");

selectSlide(currIndex);

// Next/previous controls
function nextSlide(n) {
  selectSlide(currIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  selectSlide(currIndex = n);
}

function selectSlide(n) {
  let slides = document.getElementsByClassName("slide__card");
  let slideImage = document.getElementsByClassName("slide__image");

  if (n > slides.length) {
    currIndex = 1;
  }
  if (n < 1) {
    currIndex = slides.length;
  }
  
  // Remove the 'active' class from all slides
  for (i = 0; i < slideImage.length; i++) {
    slideImage[i].className = slideImage[i].className.replace(" active", "");
  }
  
  // Add the 'active' class to the current slide
  slideImage[currIndex-1].className += " active";

  // Update the counter with leading zero if necessary
  counter.innerText = (currIndex < 10 ? "0" : "") + currIndex;
}


// TEST BUTTON

// const myTest = document.getElementById("testMe");
// const testButton = document.getElementById("testButton"); 

// testButton.onclick = addTest;

// function addTest() {
//   myTest.innerText = "TEST";
// }