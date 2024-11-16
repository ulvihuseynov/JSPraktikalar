// import {Currency} from '/Task24CurrencyAPP/currency'

const amount=document.querySelector("#amount")
const result=document.querySelector("#result")
const firstSelected=document.querySelector("#firstSelected")
const secondSelected=document.querySelector("#secondSelected")
runEventListener()
function runEventListener() {
  document.querySelector("#btn").addEventListener("click",exChange)
    // amount.addEventListener('input',exChange)
}

function exChange() {
  const amountValue=Number(amount.value)
  console.log(amountValue)
  const firstOption=firstSelected.options[firstSelected.selectedIndex].textContent
console.log(firstOption)
  const secondOption=secondSelected.options[secondSelected.selectedIndex].textContent
  console.log(secondOption)
  
  const apiKey='fca_live_BcgOdrH4QWRdzFavMarjypKee8wVlS5ScTRCogY9'

  
const url=`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${firstOption}`
    
fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_BcgOdrH4QWRdzFavMarjypKee8wVlS5ScTRCogY9&base_currency=${firstOption}`)
.then(res=>res.json())
.then(results=>{
const end=results.data[secondOption]
// console.log(end)
const son=end*amountValue
console.log(son)
result.value=son.toFixed(2)


}

)
  
   
    }

exChange()