const buttonsCarousel = document.querySelectorAll('.btnCarousel');
const slides = document.querySelectorAll('.slide');

buttonsCarousel.forEach((button) => {
    button.addEventListener('click', (index) => { 
        const calcNextSlide = index.target.id === "btnNext" ? 1 : -1;
        const slideActive = document.querySelector('.active');
        
        newIndex =  calcNextSlide + [...slides].indexOf(slideActive) ;

        if (newIndex < 0 ) newIndex = [...slides].length -1;
        if (newIndex >= [...slides].length) newIndex = 0;
        
        slides[newIndex].classList.add('active');
       
        slideActive.classList.remove('active');
    })
})