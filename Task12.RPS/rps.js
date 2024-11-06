const hide=document.querySelector(".hide")
const startBtn=document.querySelector("#startBtn")
const start=document.querySelector(".start")

hide.classList.add('none')

startBtn.addEventListener("click",()=>{
    hide.classList.add('block');
    start.classList.add('none')
    startBtn.classList.add('none')

})
const choices=['rock','paper','scissors']

const playerDisplay=document.querySelector("#playerDisplay");
const computerDisplay=document.querySelector("#computerDisplay");
const resultDisplay=document.querySelector("#resultDisplay");
const playerScoreDisplay=document.querySelector("#playerScoreDisplay")
const computerScoreDisplay=document.querySelector("#computerScoreDisplay")
let playerScore=0
let computerScore=0

const btns=document.querySelectorAll("button")

function playGame(event){
    const playerChoice=event.currentTarget.getAttribute('data-value')
    console.log(playerChoice)
    const computerChoices=choices[Math.floor(Math.random()*3)]

    let result=''

    if (playerChoice===computerChoices) {
        result="IT'S A TIE!"
    } else {
        switch(playerChoice){
            case 'rock':
             result =(computerChoices==='scissors') ? 'YOU WIN!' : 'YOU LOSE!'  
             break;
             case 'paper':
                result=(computerChoices==='rock') ? 'YOU WIN!' :"YOU LOSE!"
                break;
                case 'scissors':
                    result=(computerChoices==='paper') ? 'YOU WIN!': 'YOU LOSE!'
                    break

        }
      
    }
    playerDisplay.innerHTML=`Player: ${playerChoice}`;
    computerDisplay.innerHTML=`Computer: ${computerChoices}`
    resultDisplay.innerHTML=result
    resultDisplay.classList.remove("greenText",'redText')
    if (result==='YOU WIN!') {
        resultDisplay.classList.add('greenText')

        // playerDisplay.style.color='green'
        // computerDisplay.style.color='red'
       playerScore++
        playerScoreDisplay.innerHTML=playerScore

    }else if(result==='YOU LOSE!'){
resultDisplay.classList.add('redText')
//   playerDisplay.style.color='red'
//         computerDisplay.style.color='green'
        computerScore++
        computerScoreDisplay.innerHTML=computerScore

    } 
}

btns.forEach(btn=>{
    btn.addEventListener("click",playGame)
})