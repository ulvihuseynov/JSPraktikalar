
const display=document.querySelector("#display")
let timer =null
let startTime=0
let elapsedTime=0
let isRunning=false

const startBtn=document.querySelector("#startBtn")
const stopBtn=document.querySelector("#stopBtn")
const resetBtn=document.querySelector("#resetBtn")
// const startBtn=document.querySelector("#startBtn")

function start(){
if(!isRunning){
    startTime=Date.now()-elapsedTime
timer=setInterval(update,10)
isRunning=true
//    console.log(timer)
}
// console.log(startTime)
}

function stop(){
  if (isRunning) {
    clearInterval(timer)
    elapsedTime=Date.now()-startTime
    isRunning=false
   
  }  
}

function reset(){
  clearInterval(timer)  
startTime=0
    elapsedTime=0
 isRunning=false 
  display.textContent="00:00:00:00"
}
function update(){
    
    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;

    let hours=Math.floor(elapsedTime/(1000*60*60))
    let minutes=Math.floor(elapsedTime/(1000*60)%60)
    let seconds=Math.floor(elapsedTime/1000%60)
    let milliSeconds=Math.floor(elapsedTime%1000/10)

hours=String(hours).padStart(2,'00')
minutes=String(minutes).padStart(2,'00')
seconds=String(seconds).padStart(2,'00')
milliSeconds=String(milliSeconds).padStart(2,'00')


display.textContent=`${hours}:${minutes}:${seconds}:${milliSeconds}`
}



startBtn.addEventListener("click",start)
stopBtn.addEventListener("click",stop)
resetBtn.addEventListener("click",reset)
