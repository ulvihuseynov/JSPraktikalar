//*1
setTimeout(() => {
    console.log('vaxt bitdi')
}, 5000);

//?2
let time=document.querySelector("#time")
const strBtn=document.querySelector("#strBtn")
let timeValue=Number((time.innerText).slice(-2))
let interval
// console.log( timeValue)
strBtn.addEventListener("click",()=>{
interval=setInterval(() => {
    console.log(timeValue)
    timeValue--
   
   if (timeValue==0) {
    // time.innerHTML=`00:${timeValue}`
   
    console.log("Blast off!")
    clearInterval(interval)
    strBtn.disabled='true'
   }
     time.innerHTML=`00:${timeValue}`
//    time.innerHTML=`00:${timeValue}`.length <5 ? `00:0${timeValue}`:`00:${timeValue}`
   if (timeValue<10) {
    time.innerHTML= `00:0${timeValue}`
   }
}, 1000);

})

//!3
function newContent() {
    setInterval(()=>{
console.log("Yeni məlumatlar əldə edilir...")
    },3000)
}
// newContent()
//*4
let Time
let taymer=10
function turnOff() {
  

   Time=setTimeout(function count(){
console.log(taymer--)

Time=setTimeout(count,1000)
   },1000)
  
}
turnOff()
function stop() {
    clearTimeout(Time)
    taymer=10
}
// stop()
document.querySelector("#stop").addEventListener("click",()=>{
    stop()
})

//*5

function progress() {
    const progressBar=document.querySelector("#progress-bar")
    const progBtn=document.querySelector("#progBtn")
    progBtn.addEventListener("click",()=>{
        setInterval(() => {
            progressBar.style.width='10%'
            

           }, 100); 
    })
  
}
progress()