const word_el=document.querySelector("#word")
const popupContainer=document.querySelector("#popup-container")
const successMessage=document.querySelector("#success-message")

const wrongLetters=document.querySelector("#wrong-letters")
const items=document.querySelectorAll(".item")
const message=document.querySelector("#message")
const playAgain=document.querySelector("#play-again")


function getRandomWord() {
    const words=['javascript','python','html','css']
// console.log(Math.random()*words.length)
    return words[Math.floor(Math.random()*words.length)]
}

const correctLetters=[]
const incorrectLetters=[]
let attempt=0
let selectedWord=getRandomWord()

function displayWord(){


 word_el.innerHTML=`
${selectedWord.split('').map(letter=>`<div class="letter">${correctLetters.includes(letter) ? letter : ""}</div>`).join('')}
`


const w=word_el.textContent.replace(/\n/g,'')
console.log(w)
if (w===selectedWord) {
  popupContainer.style.display='flex'
  successMessage.innerText='Tebrikler qazandiniz'
} else {
    
}
}
displayWord()


function updateWrongletters() {
   wrongLetters.innerHTML=`
   ${incorrectLetters.length > 0 ? '<h3>{Hatali harflar}</h3>' :''}
   ${incorrectLetters.map(letter=>`
    <span>${letter}</span>`)}

   ` 
//    item.classList.add('item')

   items.forEach((item,index)=>{
    const errorCount=incorrectLetters.length
    console.log(errorCount)
   if (index<errorCount) {
    item.style.display='block'
    
   }else{
    item.style.display='none'

   }
   })
   if (incorrectLetters.length===items.length) {
     popupContainer.style.display='flex'
  successMessage.innerText='Maglub oldunuz'
   }
}
function displayMessage() {
    message.classList.add('show')
    setTimeout(() => {
    message.classList.remove('show')
        
    }, 1000);
}

playAgain.addEventListener('click',()=>{
correctLetters.splice(0)
incorrectLetters.splice(0)
selectedWord=getRandomWord()
displayWord()
updateWrongletters()
popupContainer.style.display='none'
})


window.addEventListener("keydown",(e)=>{
if (e.keyCode>=65 && e.keyCode<=90) {
    const letter=e.key
   if (selectedWord.includes(letter)) {
     if (!correctLetters.includes(letter)) {
        correctLetters.push(e.key)
        displayWord()
        attempt++
        document.querySelector("#attempt").innerHTML=attempt
     }else{
      displayMessage()
      
     

     }
   }else{
    if (!incorrectLetters.includes(letter)) {
        incorrectLetters.push(letter)
        updateWrongletters()
        attempt++
        document.querySelector("#attempt").innerHTML=attempt
    }else{
      displayMessage()
    }
   }
}

})

console.log(correctLetters)