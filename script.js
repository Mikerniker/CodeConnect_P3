

document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const cards = Array.from(sliderWrapper.getElementsByClassName('carousel__card'));
    const totalCards = cards.length;
    let currentIndex = 0;

    function moveSlider() {
        // Move the slider to the left by one card width
        sliderWrapper.style.transform = `translateX(-${100 * currentIndex}%)`;

        // After the transition ends, move the first card to the end of the wrapper
        sliderWrapper.addEventListener('transitionend', function() {
            // If the first card has moved out of view
            if (currentIndex >= totalCards) {
                // Append the first card to the end
                sliderWrapper.appendChild(cards[0]);
                
                // Reset the currentIndex to 0 and remove the transition temporarily
                currentIndex = 0;
                sliderWrapper.style.transition = 'none';
                sliderWrapper.style.transform = `translateX(-${100 * currentIndex}%)`;

                // Allow the DOM to update before re-adding the transition
                setTimeout(() => {
                    sliderWrapper.style.transition = 'transform 0.5s linear';
                }, 20);
            }
        });

        // Increment the index for the next slide
        currentIndex++;
    }

    // Move the slider at regular intervals
    setInterval(moveSlider, 2000); // Adjust the timing as needed
});


//OLDER

// document.addEventListener('DOMContentLoaded', function() {
//     const sliderWrapper = document.querySelector('.slider-wrapper');
//     const images = Array.from(sliderWrapper.getElementsByClassName('carousel__card'));
    
//     // Clone images for an infinite loop effect
//     images.forEach(image => {
//         const clone = image.cloneNode(true);
//         sliderWrapper.appendChild(clone);
//     });

   
// });




