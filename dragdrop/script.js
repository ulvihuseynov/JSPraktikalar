// const dragebl=document.querySelector('.dragebl')
// const dropzone=document.querySelector(".dropzone")
// let obj={}
// dragebl.addEventListener("dragstart",()=>{
// obj=this
// })
// dropzone.addEventListener("dragover",(e)=>{
//     e.preventDefault()
// })

// dropzone.addEventListener('drop',()=>{
//     this.append(obj)
// })
const draggable = document.querySelector('.draggable');
const dropzone = document.querySelector('.dropzone');

// Sürüklemə hadisəsi
draggable.addEventListener('dragstart', function (event) {
  event.dataTransfer.setData('text', event.target.id);
});

// Buraxma zonasına düşərkən
dropzone.addEventListener('dragover', function (event) {
  event.preventDefault();
});

dropzone.addEventListener('drop', function (event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
  const element = document.getElementById(data);
  event.target.appendChild(element);
});
