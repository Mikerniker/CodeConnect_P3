document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const sliderCards = document.querySelectorAll('.slider__card');
    const totalCards = sliderCards.length / 2; // Half are clones

    let scrollWidth = sliderWrapper.scrollWidth / 2;

    function resetSlider() {
        sliderWrapper.style.transition = 'none';
        sliderWrapper.style.transform = 'translateX(0)';
        setTimeout(() => {
            sliderWrapper.style.transition = 'transform 20s linear';
            sliderWrapper.style.transform = `translateX(-${scrollWidth}px)`;
        }, 20);
    }

    sliderWrapper.style.transform = `translateX(-${scrollWidth}px)`;
    sliderWrapper.addEventListener('transitionend', resetSlider);
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




