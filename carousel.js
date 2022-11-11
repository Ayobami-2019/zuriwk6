const nextButton = document.querySelector(".next-btn");
const previousButton = document.querySelector(".previous-btn");
const slide = document.querySelector(".container");
const slides = document.querySelector(".slide");
const container=document.querySelector(".slider")
const allSlides=Array.from(container.children);


let slideindex=1;
showSlides(slideindex);

function plusSlides(n) {
    showSlides(slideindex+= n)
}
function currentSlide(n){
    showSlides(slideindex=n);
}
function showSlides(n){
    let i;
    if (n > allSlides.length) {
        slideindex=1
    }
    if(n < 1) {slideindex = allSlides.length}
    for (i=0; i < allSlides.length; i++){
        allSlides[i].style.display ="none";
    }
    allSlides[slideindex-1].style.display="block";
}
