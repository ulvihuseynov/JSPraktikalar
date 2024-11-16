const colorText=document.querySelector(".text")
const btn=document.querySelector('#btn')

const codesArray=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


const randomColorCode=()=>{
    let hexCode='#'
    for (let i = 0; i < 6; i++) {
       hexCode+= codesArray[Math.floor(Math.random()*codesArray.length)]
    
    }
  colorText.textContent=hexCode
  document.body.style.backgroundColor=hexCode
}

btn.addEventListener('click',randomColorCode)