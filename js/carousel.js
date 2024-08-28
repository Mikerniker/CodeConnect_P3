// HERO SLIDER

var cards = document.querySelectorAll(".slider__card");

// Clone cards and append 
cards.forEach(function(card) {
    var cardCopy = card.cloneNode(true);
    document.querySelector(".slider__wrapper").appendChild(cardCopy);
});


// APPOINTMENT SLIDESHOW

const counter = document.getElementById("slideCount");
const nextButton = document.querySelector("#nextButton")
const previousButton = document.querySelector("#prevButton")
let slideNumber = 1;

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

let currIndex = 0;
const slider = document.querySelector('.slideshow__cards-group');
const cardImage = header.getElementsByClassName("slide__image");

function slide(nextIndex) {
    if (nextIndex < 0) nextIndex = cardImage.length - 1;
    if (nextIndex >= cardImage.length) nextIndex = 0;

    counter.innerText = "0" + currIndex;
    slider.style.transform = `translateX(-${(nextIndex / cardImage.length) * 100}%)`;
    currIndex = nextIndex;
  }



// /* REVIEW FOR LATER */ */
// previousButton.addEventListener





// TEST BUTTON

// const myTest = document.getElementById("testMe");
// const testButton = document.getElementById("testButton"); 

// testButton.onclick = addTest;

// function addTest() {
//   myTest.innerText = "TEST";
// }