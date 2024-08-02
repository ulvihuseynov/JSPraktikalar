const plus=document.querySelector("#plus")
const reset=document.querySelector("#reset")
const minus=document.querySelector("#minus")
const countLabel=document.querySelector("#countLabel");
let count=0
plus.addEventListener("click",()=>{
   count++
   countLabel.textContent=count
})
reset.addEventListener("click",()=>{
    count=0
    countLabel.textContent=count
 })
 minus.addEventListener("click",()=>{
   if (count<=0) {
    minus.ariaDisabled=true
    minus.style.backgroundColor="grey"
   } else {
    count--
    countLabel.textContent=count
     minus.style.backgroundColor="blue"
   }

// count--
//     countLabel.textContent=count

 })