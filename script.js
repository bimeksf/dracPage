
// gallery

const leftArrow = document.querySelector("#leftGallery");
const rightArrow = document.querySelector("#rightGallery");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

function updateActiveSlide() {
  // Odstraníme 'active' ze všech slidů a přidáme 'active' aktuálnímu slide
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentIndex].classList.add("active");
}
function changeSlide(direction) {
  // Změníme index na základě směru a zajistíme cyklické chování
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  updateActiveSlide();
}

leftArrow.addEventListener("click", function (e) {
  e.preventDefault();
  changeSlide(-1); // Posuneme index doleva
});

rightArrow.addEventListener("click", function (e) {
  e.preventDefault();
  changeSlide(1); // Posuneme index doprava
});



// reviews 


const rightReviews = document.getElementById("rightReviews");
const leftReviews = document.getElementById("leftReviews");

const review = {
  name: ["Filip Š.", "Tadeáš W.", "Michal K."],
  text: [
    '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Nulla pulvinar eleifend sem. Aliquam in lorem sit amet leo accumsan lacinia. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Aliquam erat "',
    '"Maecenas aliquet accumsan leo. Integer vulputate sem a nibh rutrum consequat. Nam sed tellus id magna elementum tincidunt. Donec quis nibh at felis congue commodo. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Aenean vel massa quis mauris vehicula lacinia. Quisque porta. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Excepteur sint occaecat cupidatat non proident, sun"',
    '"První MMA trénink byl pro mě naprosto úžasný zážitek. Od prvního momentu, kdy jsem vstoupil do tělocvičny, jsem věděl, že to bude výzva. Kombinace techniky, síly a vytrvalosti mě zcela pohltila. Bylo to fyzicky náročné a mentálně osvěžující , každá minuta mě učila něčemu novému o sobě a o tom, jak důležité je nevzdávat se. Už se nemůžu dočkat, až přijde další trénink!"',
  ],
};



rightReviews.addEventListener("click", (e) => {
  e.preventDefault();
  randomReview(1);
});
leftReviews.addEventListener("click", (e) => {
  e.preventDefault();
  randomReview(-1);
});




let indexRevies = 0







function randomReview(direction) {
  const reviewName = document.querySelector(".review-Name");
  const reviewText = document.querySelector(".Text-review");


  indexRevies = (indexRevies + direction + review.name.length ) % review.name.length;

  let name = review.name[indexRevies];
  let textOfReview = review.text[indexRevies];

  reviewName.textContent = name;
  reviewText.textContent = textOfReview;
}
randomReview(0);



let lastScrollPosition = 0; // Uchová poslední známou pozici scrollu
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY; // poice kde jsemn zrovna 
  
  // zobrazíme hlavičku když jdu na horu 
  if (currentScrollPosition < lastScrollPosition) {
    header.classList.remove('hidden');
  } else {
    // Posouváme dolů - skryjeme hlavičku
    header.classList.add('hidden');
  }

  lastScrollPosition = currentScrollPosition; // Aktualizujeme pozici
});



document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".nav-home").addEventListener("click", (e) => {
    e.preventDefault();  
    document.querySelector("#home").scrollIntoView({ 
      behavior: 'smooth' 
    });
  });

  document.querySelector(".nav-trenink").addEventListener("click", (e) => {
    e.preventDefault();  
    document.querySelector("#trenink").scrollIntoView({ 
      behavior: 'smooth' 
    });
  });

  document.querySelector(".nav-cenik").addEventListener("click", (e) => {
    e.preventDefault();  
    document.querySelector("#cenik").scrollIntoView({ 
      behavior: 'smooth' 
    });
  });

  document.querySelector(".nav-kontakt").addEventListener("click", (e) => {
    e.preventDefault();  
    document.querySelector("#kontakt").scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
});
