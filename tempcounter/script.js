
const textbox=document.querySelector("#textbox");
const toFahren=document.querySelector("#toFahren")
const toCelsius=document.querySelector("#toCelsius")
const result=document.querySelector("#result");

let temp;


function convert() {
    if (toFahren.checked) {
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent=`${temp} + "°F"`
    }else if(toCelsius.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9)
        result.textContent=`${temp} + "°C"`
    }else{
       result.textContent="Select a unit" 
    }
}