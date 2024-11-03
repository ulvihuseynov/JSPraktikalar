

const minNum=1;
const maxNum=100;

const randomNumber=Math.floor(Math.random()*(maxNum-minNum +1))+minNum
// console.log(randomNumber)
let attemps=0
let guess
let running=true

while(running){
    attemps++
guess=Number(prompt(`${minNum} - ${maxNum} arasinda ededler daxil ede bilersiz`))
// console.log(guess)
if (isNaN(guess)) {
    alert('Reqem daxil edin')
}else if(guess < minNum || guess >maxNum){
    alert('Kecerli reqem daxil edin')

}else{
    if (guess<randomNumber) {
        alert('Too low')
    }else if(guess>randomNumber){
        alert("Too high")
    }else{
        alert(`Correct answer ${guess}. ${attemps} cehdden`)
        running=false
    }
}
   
}