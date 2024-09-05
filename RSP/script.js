const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const PLAYERSCORE=document.querySelector("#PLAYERSCORE")
const COMPUTERSCORE=document.querySelector("#COMPUTERSCORE")
let playScore=0;
let computerScore=0;

function playGame(playerChoice) {
  let computerChoices = choices[Math.floor(Math.random() * choices.length)];
  let result = "";
  if (computerChoices === playerChoice) {
    result = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoices === "scissors" ? "YOU WIN" : "YOU LOSE";
        break;
      case "paper":
        result = computerChoices === "rock" ? "YOU WIN" : "YOU LOSE";
        break;
      case "scissors":
        result = computerChoices === "paper" ? "YOU WIN" : "YOU LOSE";
        break;
      default:
        break;
    }
  }
  playerDisplay.textContent=`PLAYER: ${playerChoice}`
    computerDisplay.textContent=`COMPUTER: ${computerChoices}`
resultDisplay.textContent=result
resultDisplay.classList.remove("greenText","redText")
    switch (result) {
      case 'YOU WIN':
        resultDisplay.classList.add("greenText")
        playScore++
        PLAYERSCORE.textContent=playScore
        break;
        case 'YOU LOSE':
          resultDisplay.classList.add("redText")
          computerScore++
          COMPUTERSCORE.textContent=computerScore
          break;    
      default:
        break;
    }
}
