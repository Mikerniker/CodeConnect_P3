// HERO SLIDER


var cards = document.querySelectorAll(".slider__card");

// Clone cards and append 
cards.forEach(function(card) {
    var cardCopy = card.cloneNode(true);
    document.querySelector(".slider__wrapper").appendChild(cardCopy);
});


// const myTest = document.getElementById("testMe");
// const testButton = document.getElementById("testButton"); 

// testButton.onclick = addTest;

// function addTest() {
//   myTest.innerText = "TEST";
// }