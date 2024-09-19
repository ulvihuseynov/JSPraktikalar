// const form1=document.getElementById('form1')
// 1. elements
// 2. document.forms
// 3.submit
// 4.reset
// 5. validity


// const subBtn=document.querySelector("#submit-btn").addEventListener("click",()=>{
//   document.forms.form1.submit()
// })
// [...document.forms.form1].forEach(element=>{
//   console.log(element.validationMessage);
  
// })
function checkValidity(element) {
  if (element.validity.badInput) {
    element.setCustomValidity("Bu alan zorunlu qardas")
   
  }else if(element.validity.patternMisMatch){
    element.setCustomValidity("Duzgun Pattern")
  }else if(element.validity.tooShort){
    element.setCustomValidity("Qisa Qaldi")
  }else if(element.validity.tooLong){
    element.setCustomValidity("uzun oldu qaqa")
  }else if(element.validity.valueMissing){
    element.setCustomValidity("doldur")
  }else if(element.validity.typeMismatch){
    element.setCustomValidity("type error")
  }else {
    element.setCustomValidity('')
  }
  element.reportValidity()
}




document.forms.form1.addEventListener("submit",(e)=>{
  e.preventDefault();
  [...document.forms.form1.elements].reverse().forEach(element=>{
    checkValidity(element)

element.addEventListener("input",e=>{
  checkValidity(element)
})
    
  })
  if (e.target.checkValidity()) {
    e.target.submit()
  }
})


const testBnt=document.querySelector("#test")
testBnt.addEventListener("click",(e)=>{
  console.log(e.isTrusted);
  
  console.log('btn tikladi');
  
})
testBnt.dispatchEvent(
new Event("click")
)


const tab=document.querySelector(".tab")
const btn=tab.querySelectorAll("nav button")
const contents=tab.querySelectorAll(".content section")
console.log(btn);

btn[0].classList.add('active')

console.log([...contents].slice(1).forEach(item=>{
  item.style.display="none"
}));

btn.forEach((button,index)=>button.addEventListener("click",(e)=>{
btn.forEach(item=>{
  item.classList.remove("active")
})
e.target.classList.add("active");
contents.forEach(item=>item.style.display='none')
console.log(contents[index].style.display='block');

tab.dispatchEvent(
  new CustomEvent('tabChange',{
    detail:{
      tab:index
    }
  })
)
}))

tab.addEventListener('tabChange',(e)=>{
console.log(e.detail.tab);

})
