// function appendToDisplay(){
//     let btn=document.querySelectorAll("button").value
//   document.querySelector("#display").innerHTML= btn 
 
// }

const display=document.querySelector("#display")
function appendToDisplay(input){
display.value+=input
}

function clearDisplay() {
   display.value='' 
}

function calculate() {
   try{
    display.value=eval(display.value) 
   }catch(error){
display.value='Error'
   }
}