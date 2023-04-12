const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numSlides = slides.length;
var slideNum = 0; 


nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slideNum++;

    if(slideNum > (numSlides - 1)){
      slideNum = 0;
    }

    slides[slideNum].classList.add("active");

});

prevBtn.addEventListener("click", ()=>{

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNum--;

  if(slideNum < 0){
    slideNum = numSlides - 1;
  }

  slides[slideNum].classList.add("active");

});
