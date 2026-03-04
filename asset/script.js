// 'use strict';


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

// Ouvrir la modal
document.querySelectorAll("button[data-modal]").forEach(button => {
  button.addEventListener("click", function() {
    const modalId = this.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  });
});

// Fermer la modal avec le X
document.querySelectorAll(".close").forEach(closeBtn => {
  closeBtn.addEventListener("click", function() {
    this.closest(".modal").style.display = "none";
  });
});

// Fermer en cliquant en dehors
window.addEventListener("click", function(e) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

const burger = document.querySelector(".burger");
const menuMobile = document.querySelector(".navButtonMobile");

burger.addEventListener("click", () => {
    menuMobile.classList.toggle("OpenBurger");
    menuMobile.classList.toggle("closeBurger");
});

