/*Tapşırıq 1: Element Yarat və DOM-a Əlavə Et
Bir JavaScript funksiyası yazın ki, o yeni bir <div> elementi yaratsın və bu elementə mətn əlavə etsin. Funksiya yeni yaradılan elementi səhifənin bədən hissəsinə əlavə ödəniş.Tapşırıq 2: Mətn Məzmununu Dəyişdir
Elə bir funksiya yazın ki, bir id-yə sahib <p> elementini seçib, onun mətnini "Salam, Dünya!" olaraq dəyişdirsin.Tapşırıq 3: Bir Elementin Stilini Yenilə
Bir JavaScript funksiyası yazın ki, bir class adı olan <div> elementinin arxa planı rəngini mavi rəngə dəyişdirsin.Tapşırıq 4 : Sinifi Əlavə Et və Sil
Elə bir funksiya yaradın ki, bir düymə basıldığında bir siyahı elementlərinin highlight adlı sinifini dəyişdirsin (sinif əlavə etsin və ya silsin).Tapşırıq 5: Bir Neçə Element Yarat və Əlavə Et
Elə bir funksiya yazın ki, mövcud <ul> elementinə beş <li> elementi yaratsın və əlavə etsin, və hər bir < li> 1-dən 5-ə qədər nömrələnmiş olsun.*/
//!task1
function createElement() {
  const div = document.createElement("div");
  div.innerText = "Men bir div elementiyem.";
  div.className = "div";
  // div.className='new'
  console.log(div);
  document.querySelector("body").appendChild(div);
}
createElement();
//? task2
function setContent() {
  const p = document.querySelector("#content");
  p.innerText = "Salam Dunya!";
  p.classList.add("content");
}
setContent();

//*task3
function setColor() {
    const div=document.querySelector(".color")
    const btn=document.querySelector("#btn-color")
    btn.addEventListener('click',()=>{
        div.style.backgroundColor='yellow'
    })
}
setColor()

//*task4

function listColor() {
    const li=document.querySelectorAll('#listColor li')
    const addbtn=document.querySelector("#add")
    addbtn.addEventListener("click",(e)=>{
        // e.preventDefault()
        li.forEach(item=>{
            item.classList.toggle("highlight")
        })
    })
}

listColor()


function todo() {
    const btn=document.querySelector("#addTodo")
    const input=document.querySelector("input")
    btn.addEventListener("click",()=>{
    if (input.value=="") {
        return
    } else {
        const ul=   document.createElement("ul")
        const li =   document.createElement("li")
        li.innerHTML=input.value
   ul.appendChild(li)
   input.value=""
   document.querySelector(".todo").appendChild(ul)
    }
    }
)
}
todo()