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
// console.log(allSlides.length)

// const slideWidth = slides.getBoundingClientRect().width;

// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + "px";
// };
// allSlides.forEach(setSlidePosition);

// const moveToSlide =(container, currentSlide, targetSlide) => {
//     container.style.transform = "translateX(-" + targetSlide.style.left + ")";
//     // let firstSlide=0
//     currentSlide.classList.remove("currentSlide");
//     targetSlide.classList.add("currentSlide");
    
//     // else if(currentSlide === i){
//     //     targetSlide.add(i);
//     // }
//     moveToSlide(container, currentSlide, nextSlide);
// };

// previousButton.addEventListener("click", e => {
//     const currentSlide = container.querySelector(".currentSlide");
//     const previousSlide=currentSlide.previousElementSibling;

//     if(currentSlide < 0){
//         previousSlide=allSlides.length
//     }

//     moveToSlide(container, currentSlide, previousSlide)

    
// });

// nextButton.addEventListener("click", e => {
//     const currentSlide = container.querySelector(".currentSlide");
//     const nextSlide=currentSlide.nextElementSibling;

//     if(currentSlide > allSlides.length){
//         nextSlide=0
//     }

//     moveToSlide(container, currentSlide, nextSlide)
//     // const firstSlide= 0   
// });
// nextButton.addEventListener('click', e => {
    
// })
    // const currentSlide = slide.querySelector(".currentslider");
    // 
    // 
    // 
    // 


// slides.forEach((item, i) => {
//     let containerDimension=item.getBoundingClientRect();
//     let containerwidth=containerDimension.width;
// })

//nextButton[i].addEventListener("click", ()=> {
//     item.scrollleft +=containerwidth
// });

// previousButton[i].addEventListener("click", ()=> {
//     item.scrollleft -=containerwidth
// });