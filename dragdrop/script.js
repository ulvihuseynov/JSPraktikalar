const draggable=document.querySelectorAll(".draggable")
const dropzone=document.querySelector("#dropzone")

dropzone.addEventListener('dragover',function(e){
  e.preventDefault()
})

draggable.forEach(function(item){
item.addEventListener('dragstart',function(e){
e.dataTransfer.setData("text",e.target.id)
  })
})
dropzone.addEventListener('drop',function(e){
  e.preventDefault()
  const data=e.dataTransfer.getData('text')
  const element=document.getElementById(data)
  dropzone.appendChild(element)
})

// function getThis() {
//   const arrow=()=>{
//     console.log(this)
//   }

// }
// console.log(getThis())

// let arr=[1,2,3,4]
// arr.forEach(item=>{
//   if (item>1) {
//     console.log(item)
//     return item
//   }
//   // return item
// })
// console.log(item)



function outer() {
 let count =0
function inner() {
  return count++
}
   return inner
}

const end=outer()
console.log(end())
console.log(end())
console.log(end())
console.log(end())





// function createMultiplier(factor) {
//   return function(number) {
//       return number * factor;
//   };
// }

// const multiplyByTwo = createMultiplier(2);
// console.log(multiplyByTwo(5)); // 10

// const multiplyByThree = createMultiplier(3);
// console.log(multiplyByThree(5)); // 15
// let count=0
// console.log(count--)
// console.log(count--)
// // console.log(--counct)
