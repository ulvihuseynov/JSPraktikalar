const prevBtn=document.querySelector(".prev")
const nextBtn=document.querySelector(".next")

const slides=document.querySelectorAll(".slides img")
console.log(slides)
let slideIndex=0
let intevalId=null

//initializeSlider()
document.addEventListener("DOMContentLoaded",initializeSlider)

function initializeSlider() {
  if (slides.length>0) {
    slides[slideIndex].classList.add('displaySlide')
    intevalId=setInterval(nextSlide,5000)
  }
   // console.log(intevalId)
}
function showSlide(index){
    if (index>=slides.length) {
        slideIndex=0
    } else if(index<0) {
        slideIndex=slides.length-1
    }
slides.forEach(slide=>{
    slide.classList.remove('displaySlide')
})
slides[slideIndex].classList.add("displaySlide")
}
function prevSlide() {
    clearInterval(intevalId)
    slideIndex--
    showSlide(slideIndex) 
}

function nextSlide() {

    slideIndex++
    showSlide(slideIndex)
}

prevBtn.addEventListener('click',prevSlide)
nextBtn.addEventListener('click',nextSlide)


// console.dir(window.navigator.geolocation.getCurrentPosition((position)=>{
//     console.log(position.coords.latitude)
// }))