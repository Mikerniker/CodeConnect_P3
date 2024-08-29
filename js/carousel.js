// HERO SLIDER

var cards = document.querySelectorAll(".slider__card");

// Clone cards and append 
cards.forEach(function(card) {
    var cardCopy = card.cloneNode(true);
    document.querySelector(".slider__wrapper").appendChild(cardCopy);
});


// APPOINTMENT SLIDESHOW

let currIndex = 1;
let slideImage = document.getElementsByClassName("slide__image");
const slider = document.querySelector('.slideshow__cards-group');
const imageContainer = slider.getElementsByClassName("slide__card");
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
  if (n > imageContainer.length) {
    currIndex = 1;
  }
  if (n < 1) {
    currIndex = imageContainer.length;
  }
  
  // Remove the 'active' class from all slides
  for (i = 0; i < slideImage.length; i++) {
    slideImage[i].className = slideImage[i].className.replace(" active", "");
  }
  
  // Add the 'active' class to the current slide
  slideImage[currIndex-1].className += " active";
  slideImage[currIndex-1].scrollIntoView();

  // Update the counter
  counter.innerText = (currIndex < 10 ? "0" : "") + currIndex;
}


// TEST BUTTON

// const myTest = document.getElementById("testMe");
// const testButton = document.getElementById("testButton"); 

// testButton.onclick = addTest;

// function addTest() {
//   myTest.innerText = "TEST";
// }