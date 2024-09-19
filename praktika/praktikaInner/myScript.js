
// const countries = [
//   {
//     flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png", // ABŞ bayrağı
//     name: "United States",
//     capital: "Washington, D.C.",
//     area: "9,525,067 km²"
//   },
//   {
//     flag: "https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/original/products/2852/5280/canadaflag__98669.1617275975.jpg", // Kanada bayrağı
//     name: "Canada",
//     capital: "Ottawa",
//     area: "9,984,670 km²"
//   },
//   {
//     flag: "https://m.media-amazon.com/images/I/51IulKi-ULL.jpg", // Yaponiya bayrağı
//     name: "Japan",
//     capital: "Tokyo",
//     area: "377,975 km²"
//   },
//   {
//     flag: "https://m.media-amazon.com/images/I/71vcKt-PbvL._AC_UF1000,1000_QL80_.jpg", // Braziliya bayrağı
//     name: "Brazil",
//     capital: "Brasília",
//     area: "8,515,767 km²"
//   },
//   {
//     flag: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/australia-flag-icon.png", // Avstraliya bayrağı
//     name: "Australia",
//     capital: "Canberra",
//     area: "7,692,024 km²"
//   }
// ];

// console.log(countries);
// let data=countries.map(item=>{
//   return `
//     <div class="card">
//       <img src="${item.flag}" class="card-img-top" alt="..." >
//       <div class="card-body" >
//         <h5 class="card-title">${item.name}</h5>
//         <h6 class="card-subtitle  ">${item.capital}</h6>
//         <p class="card-text">${item.area} </p>
       
//       </div>
//     </div>
//   `
// }).join(" ")
// document.querySelector(".data").innerHTML=data

let basket =[
  {
    name:"samsung",
    price:2400
  },
  {
    name:"nokia",
    price:600
  },
  {
    name:"iphone",
    price:4500
  }
]

let sum=basket.reduce((acc,item)=>{
 
  
  acc+=item.price
  return acc
},0)
console.log(sum);
const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
  { name: 'David', grade: 'C' }
];

let group='grade'

let bax=students.reduce((acc,studuent)=>{
  let key=studuent[group]
 if (!acc[key]) {
 acc[key]=[]
 }
 acc[key].push(studuent)
  return acc
  
},{})

console.log(bax);
