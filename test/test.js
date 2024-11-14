// const body = document.body;
// body.style = `
//     margin: 0;
//     padding: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//      display: flex;
//     flex-wrap: wrap;
    
// `;

// function CreateCard() {
//     const cardBox = document.createElement("div");
// cardBox.classList.add("card");

// const imgBox = document.createElement("div");
// imgBox.id = "imgBox";

// const img = document.createElement("img");
// img.src =
//   "https://www.honda.az/assets/local/static/dist/img/auto/model/model-cr-v.png?ver=1";
// img.alt = "Honda";
// img.classList.add("img");

// const cardContent = document.createElement("div");
// cardContent.classList.add("card-content");

// const h1 = document.createElement("h1");
// h1.classList.add("heading");
// h1.id = "head";
// h1.textContent = "Honda";

// const p = document.createElement("p");
// p.id = "desc";
// p.classList.add("description");
// p.textContent =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dolor quo corrupti? Recusandae obcaecati incidunt minus nemo tenetur odit at!";
// const action = document.createElement("div");
// action.id = "action";

// const button = document.createElement("button");
// button.id = "btn";
// button.classList.add("detail-btn");
// button.textContent = "Details";
// imgBox.appendChild(img);
// cardContent.appendChild(h1);
// cardContent.appendChild(p);
// action.appendChild(button);

// cardBox.appendChild(imgBox);
// cardBox.appendChild(cardContent);
// cardBox.appendChild(action);


// return cardBox


// }

// for(let i=0; i<8;i++){
//     document.addEventListener("DOMContentLoaded",()=>{
//         const spinner = document.getElementById("loading-spinner");
//         spinner.style.display = "block";

// setTimeout(()=>{
//     const card=CreateCard()
//     body.appendChild(card);
//     spinner.style.display = "none";

// },3000)
//     })

// }



const myBox=document.querySelector("#mybox")

// document.addEventListener("keydown",e=>{
// console.log(`keydown ${e.key}`)
// myBox.style.backgroundColor='red'
// myBox.textContent='keydown'
// })


// document.addEventListener("keyup",e=>{
//     console.log(`keyup ${e.key}`)
// myBox.style.backgroundColor='green'
// myBox.textContent='keyup'


//     })
const img=document.querySelector("img")
myBox.addEventListener("click",()=>{
    if (img.classList.contains('dNone')) {
        // img.classList.toggle('dNone')
        // myBox.textContent='Show'
        myBox.textContent='Hide'
        img.classList.toggle('dNone')

    }
  else{
      img.classList.toggle('dNone')
    myBox.textContent='Show'
  }


})