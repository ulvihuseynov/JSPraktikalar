const heading=document.querySelector("#heading")
heading.textContent='Temperature conversion:'
heading.style.color="green"
heading.style.margin="0 0 20px 0"

const submitBtn=document.querySelector("#submitBtn")
submitBtn.textContent='Submit'

const textBox=document.querySelector("#textBox")

textBox.style=`
text-align:center;
font-size:30px;
width:50%;
margin-bottom:20px;
border-radius:4px`

const label=document.querySelectorAll("label")
label.forEach(item=>{
item.classList.add('label')
})


let temp

const toFahrenHeit=document.querySelector("#toFahrenHeit")
const toCelsius=document.querySelector("#toCelsius")
const result=document.querySelector("#result")
submitBtn.addEventListener("click",()=>{
if (toFahrenHeit.checked) {
    temp=Number(textBox.value)
    temp=temp*9/5+32
    result.textContent=temp.toFixed(1) + '°F'
    
}else if(toCelsius.checked){
    temp=Number(textBox.value)
    temp=(temp-32)*(5/9)
    result.textContent=temp.toFixed(1) + '°C'

}else{
    result.textContent='Select a unit'
}
}) 