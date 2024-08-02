// bar(); // TypeError: bar is not a function

// var bar =  ()=> {
//     console.log("Hello, world!");
// };
// "use strict";

// function duplicateParam(a, a) {
//     return a; // SyntaxError: Duplicate parameter name not allowed in this context
// }
// eval("var x=5")
// console.log(x);

// function example() {
//     // if (true) {
//     //     let x = 5;
//     //     let y = 10;
//     //     console.log(x); // 5
//     //     console.log(y); // 10
//     // }
//     // console.log(x); // ReferenceError: x is not defined
//     // console.log(y); // ReferenceError: y is not defined
// for (var i = 0; i < 100; i++) {
//  if (i%2==0&&i%5==0&&i%3==0&&i%4==0) {
//      console.log(i);
//  }

// }
// console.log(i);
// }

// // console.log(x); // ReferenceError: x is not defined
// // console.log(y); // ReferenceError: y is not defined

// example();

// function example() {
// //   console.log(x);
//     let x="ulvi"
//     console.log(x);
//     // return x
// }
// // console.log(x);
// // console.log(example);
// example()
// if (true) {
//     var x="ulvi"
//     // console.log(x);
//     // return x
// } else {

// }
// console.log(x);
// let eded=[3,4,5,6,7]

// let min=eded[0];
// let max=eded[0]

// for (let i = 1; i < eded.length; i++) {
//  if (eded[i]<min) {
//     min=eded[i]
//  }
//  if (eded[i]>max) {
//     max=eded[i]
//  }
// }

// console.log(min);
// console.log(max);

/* function generatorFunction(length) {
    let charaters='qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM?/!@#$%^&*()'
    let sifre=''

    for (let i = 0; i < length; i++) {
     let randomi=Math.floor(Math.random()*charaters.length)
       sifre+=charaters[randomi]
}
    return sifre
}
*/
// console.log(generatorFunction(4));
/*1... . 9. Daxil edilən 2 ədəd və operatora əsasən hesablama işi 
görün. (Switch ilə) 
Məsələn => a=5 ,b=6 operator --> + olarsa output: 11   */

// function example(num1, num2, operator) {
//   /*  let sum = 0;
//   let multi=1
//   for (let i = 1; i <100; i++) {
//     if (i % 2 == 0 ) {
//       sum += i;
//       multi*=i
//       console.log(i);
//     //   console.log(i);

//     }
//   }
//   console.log(sum);
//   console.log(+multi.toExponential(2));*/
//   switch (operator) {
//     case "+":
//       console.log(num1 + num2);
//       break;
//     case "*":
//       console.log(num1 * num2);
//       break;
//     case "/":
//       console.log(num1 / num2);
//       break;
//     case "-":
//       console.log(num1 - num2);
//       break;
//     default:
//         alert("Duzgun opreator sec")
//       break;
//   }
// }

// // let user=+prompt("eded daxil et")
// let user=prompt("İki rəqəmi və bir operatoru vergüllə ayıraraq daxil edin (məsələn: 4,5,+):")
// let values=user.split(",")
// let num1=values[0];
// let num2=values[1]
// let operator=values[2]
// // console.log(user);
// example(num1,num2,operator);

/*function month(fesil) {
  switch (fesil) {
    case 1:
      console.log("winter");
      break;
    case 2:
      console.log("winter");
      break;
    case 3:
      console.log("spring");
      break;
    case 4:
      console.log("spring");
      break;
    case 5:
      console.log("spring");
      break;
    case 6:
      console.log("summer");
      break;
    case 7:
      console.log("summer");
      break;
    case 8:
      console.log("summer");
      break;
    case 9:
      console.log("autumn");
      break;
    case 10:
      console.log("autumn");
      break;
    case 11:
      console.log("autumn");
      break;
    case 12:
      console.log("winter");
      break;
    default:
      console.log("bele fesil yoxdur");
      break;
  }
}
let user=prompt('ay daxil edin');
// console.log();
month(+user)*/

// let user=prompt("Gender daxil et:M/F").toUpperCase()
// let gender
// if (user=='M') {
//  console.log( gender='Male');
// } else if (user=='F') {
// console.log(  gender="Female");
// }else{
//   alert("Yox artiq")
// }
// function reverseText(text) {
//  let reverse = text.split("").reverse().join("")
//  return reverse==text
// }

// let userText=prompt("Metn yaz")
// console.log(reverseText(userText));

// function isPrime() {
//   let sade=[]
//   let murekkeb=[]

//   for (let num = 2; num <=100; num++) {
//     let prime=true;
//     for(let i=2;i<=Math.sqrt(num);i++){
//       if (num%i===0) {
//         prime=false;
//         break;
//       }
//     }
//     if (prime) {
//       sade.push(num)
//     } else {
//       murekkeb.push(num)
//     }
//   }
//   return {sade,murekkeb}
// }
// const result=isPrime()
// console.log(result.sade);

// console.log(result.murekkeb);
//

//

// const obj={
//   name:"ulvi",
//   surName:"huseynov",
//   age:23
// }
// for (const data in obj) {
//   console.log(data + "  "+ obj[data]);con
// }
// const btn=document.querySelector("#btn")
// const show=document.querySelector("#show")
// let max=10
// let min=1
// btn.addEventListener("click",()=>{
//   let ranNam=Math.floor(Math.random()*max)+min
//   show.textContent=ranNam
// })
// const myCheck=document.querySelector("#myCheck")
// const Qarabag=document.querySelector("#Qarabag")
// const Neftchi=document.querySelector("#neftchi")
// const Sabah=document.querySelector("#Sabah")
// const mySubmit=document.querySelector("#mySubmit")
// const subResult=document.querySelector("#subResult")
// const Pfk=document.querySelector("#pfk")

// mySubmit.addEventListener("click",()=>{
//   if (myCheck.checked) {
//     subResult.textContent=`Abune olundu`
//   } else {
//      subResult.textContent=`Abune ol`
//   }

//   if (Qarabag.checked) {
//     Pfk.textContent=`Qarabag`
//   }else if(Neftchi.checked){
//     Pfk.textContent=`Neftchi Baku`
//   }else if(Sabah.checked){
//     Pfk.textContent=`Sabah`
//   }else{
//     Pfk.textContent=`You are not team`
//   }
// })

// let age=23

// age>65 ? document.write('Dogru') : document.write('Yalan')

// const minNum=1
const maxNum = 100;
// const answer=Math.floor(Math.random()*(maxNum-minNum+1)+minNum)

// let attempts=0;
// let guess;
// let running=true;

// while (running) {
//   guess=window.prompt(`guess a number between ${minNum}- ${maxNum}`)

// guess=Number(guess)
// console.log(typeof guess,guess);
// if (isNaN(guess)) {
//   alert(`Please valid number`)
// } else if(guess<minNum || guess>maxNum) {
//   alert(`Please valid number`)
// }else{
//   attempts++
//   if (guess<answer) {
//     alert(`Too low`)
//   }else if(guess>answer){
//     alert(`Too high`)
//   }else{
//     alert(`CoRRect answer ${answer}.   ${attempts} attempts`)
//     running=false
//   }
// }

// }

/*   İstifadəçidən mətn daxil etməsini tələb edən və 
mətndə rəqəmlərin olub-olmaması barədə konsola mesaj 
çıxaran proqram tərtib edin.   */

// function search(arr) {
//   let regex=/\d/
// if (!regex.test(arr)) {
//  let end= arr.slice(0)
//  return end
// }

// }

// // let userText=prompt("Cumle daxil edin")
// // console.log(search(userText));
// console.log(search([1,2,'alma',3,4,'tuer',5,6,'armud','nar']));

// let arr=['ulvi','sakir','zakir','cahil','qezenfer','alma']
// let arr=[42,65,78,9,80,23,12]
// arr.map(item=>console.log(item*item))
// let obj = [
//   {
//     id: 1,
//     img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
//     name: "ulvi",
//     surname: "huseynov",
//     city: "baku",
//   },
//   {
//     id: 2,
//     img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
//     name: "mahir",
//     surname: "asgarov",
//     city: "london",
//   },
//   {
//     id: 3,
//     img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
//     name: "zakir",
//     surname: "sukurov",
//     city: "tula",
//   },
//   {
//     id: 4,
//     img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
//     name: "samir",
//     surname: "musayev",
//     city: "berlin",
//   },
// ];

// const data = obj
//   .map((item) => {
//     return `
//   <div class="card">
//     <img src="${item.img}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="">${item.name} ${item.surname}</h5>
//       <h6 class="">${item.city}</h6>
//       <p class="">${item.id}</p>

//     </div>
//   </div>
//   `;
//   })
//   .join(" ");
// document.getElementById("container").innerHTML = data;

// let myObj2={
//  age:23,
//  id:1
// }

// let myObj={
//   name:"Ulvi",
//   surName:"Huseynov",
//   city:"Baku",
//   job:"Issiz"
// }
// let concat=Object.assign(myObj,myObj2)
// console.log(concat);
// Object.seal(myObj)
// delete myObj.name
// myObj.age='45'
// console.log(myObj);

/*1 Array elementlərində ədəd olmayan elementləri silin
 */
// let arr=[1,2,2,9,3,3,4,55,55,6,7,8,7,6,9]
// let set=[... new Set(arr)]
// console.log(set);

// let filter=arr.filter((item,i,array)=>{
//   return array.iOf(item)===index
// })
// console.log(filter);

// let reduce=arr.reduce((acc,current)=>{
//   if (!acc.includes(current)) {
//     acc.push(current)
//   }
//   return acc
// },[])
// console.log(reduce);
// let arr=[1,'alma','ulvi',2,'nar',false,5,7,9,NaN]
// let arrNum=arr.filter(item=>typeof item ==="number" && !isNaN(item))
// console.log(arrNum);
// let reduce=arr.reduce((acc,current)=>{
//   if (typeof current==='number' && !isNaN(current)) {
//       acc.push(current)
//   }
//   return acc
// },[])

// console.log(reduce);

/*function reverseSentence(text) {
// let bax=text.split(" ").filter(word=>word.length > 0)
// console.log(bax);
// // return bax.length
// let words=text.split(" ")
// console.log(words);
// let count=0
// for (const word of words) {
//   console.log(word);
//   if (word.length>5) {
//     count++
//   }
 
// }
// return count
let bax=text.replaceAll("%","faiz")

return bax
}
*/
// let userText=prompt("Cumle daxil edin")
// console.log(reverseSentence(userText));

// let one=['ulvi',123,'pie']
// let two=['ulvi',123,'pie']
// console.log(one===two);

// let arr=[23,1,12,65,32,123,-45,2,18]
// // let min=Math.min([arr])
// // console.log(min);
// // let max=Math.max(...arr)
// // console.log(max);

// for(let i=0;i<arr.length;i++){
// console.log(Math.max(arr[i]));
// }
// let eded=100
// let eded2=10
// console.log(eded===eded2);

/*30. Verilmiş mətndə təkrarlana sözlərin sayını tapın */
/*function countRepeatedWords(text) {
  let words=text.toLowerCase().split(/\s+/)
  console.log(words);
  let wordCount={}
  for (const word of words) {
    // console.log(word);
    if (wordCount[word]) {
     console.log( wordCount[word]++);
    } else {
      wordCount[word]=1
    }
  }
  let repeatWord=[]
  for (const word in wordCount) {
    console.log(word);
    if (wordCount[word]>1) {
      repeatWord[word] =wordCount[word]
    }
  }
  return repeatWord
}

let text = "Bu bir test mətnidir. Bu mətn test üçün yazılmışdır. ulvi ulvi ulvi ulvi Mətn mətnləri təkrarlanır.";
console.log(countRepeatedWords(text));*/

/*function text(userText) {
  switch (userText) {
    case 1:
      console.log("Bir");
      break;
    case 2:
      console.log("Iki");
      break;
    case 3:
      console.log("Uc");
      break;
    case 4:
      console.log("Dord");
      break;
    default:
      console.log("Her reqemi yazmaq olmdai");
      break;
  }
}*/
// let user = +prompt("Reqem yaz");
// text(user);
/*function numberToWords(num) {
  if (num < 0 || num > 99) {
    return "Daxil edilmiş ədəd 0-dan 99-a qədər olmalıdır.";
  }

  const ones = [
    "Sıfır", "Bir", "İki", "Üç", "Dörd", "Beş", "Altı", "Yeddi", "Səkkiz", "Doqquz"
  ];
  
  const teens = [
    "On", "On Bir", "On İki", "On Üç", "On Dörd", "On Beş", "On Altı", "On Yeddi", "On Səkkiz", "On Doqquz"
  ];
  
  const tens = [
    "", "", "İyirmi", "Otuz", "Qırx", "Əlli", "Altımış", "Yetmiş", "Səksən", "Doxsan"
  ];

  if (num < 10) {
    return ones[num];
  } else if (num < 20) {
    return teens[num - 10];
  } else {
    const ten = Math.floor(num / 10);
    const one = num % 10;
    return tens[ten] + (one ? " " + ones[one] : "");
  }
}*/

// Testlər
// Sıfır
// console.log(numberToWords(1));   // Bir
// console.log(numberToWords(11));  // On Bir
// console.log(numberToWords(23));  // İyirmi Üç
// console.log(numberToWords(45));  // Qırx Beş
// console.log(numberToWords(99));  // Doxsan Doqquz
// let user=+prompt("Reqem yazin")
// console.log(numberToWords(user));

// function calc(a,callback) {
//   return a+callback(12,58)
// }

// function sum(a,b) {
//   return a+b
// }
// console.log(calc(20,sum));

const countries = [
  {
    name: "Azərbaycan",
    capital: "Bakı",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Flag_of_Azerbaijan.png",
    area: 86600, // km²
    population: 10139177, // 2023 sayımı
  },
  {
    name: "Türkiyə",
    capital: "Ankara",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_Turkey.png/640px-Flag_of_Turkey.png",
    area: 783356, // km²
    population: 84339067, // 2020 sayımı
  },
  {
    name: "Rusiya",
    capital: "Moskva",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/2560px-Flag_of_Russia.svg.png",
    area: 17098246, // km²
    population: 146599183, // 2021 sayımı
  },
  {
    name: "Almanya",
    capital: "Berlin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png",
    area: 357022, // km²
    population: 83240525, // 2021 sayımı
  },
  {
    name: "Amerika Birləşmiş Ştatları",
    capital: "Vaşinqton",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1280px-Flag_of_the_United_States.png",
    area: 9833520, // km²
    population: 331893745, // 2021 sayımı
  },
];

const data = countries.map((item) => {
  return `
  <div class="card" >
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted ">${item.capital}</h6>
    <p class="card-text">${item.area}</p>
   <p class="card-text">${item.population}</p>
  </div>
</div>
  `;
});
const show = (document.querySelector("#container").innerHTML = data);

/*const student={
  name:"ulvi",
  "surname":"huseynov",
  age:23,
  city:'baku',
  show:function () {
    return `Salam menim adim ${this.name}, soyadim ${this.surname}, ${this.age} yasim var ve ${this.city}de yasayiram`
  },
  job:""
}
delete student.city
// delete student.age
// delete student.surname
let bax=Object.entries(student)
if (student.hasOwnProperty("name")) {
  console.log('xos gorduk')

} else {
  alert('gel gorusek')
}
console.log(bax);
const teacher=student
console.log(teacher==student);
teacher.name='zakir';
teacher.city='sabirabad'

console.log("TEACHER OBJECT",teacher);
console.log("STUDUENT OBJECT",student);
console.log(student.show());
// console.log(student['name']);
let age='age'
// console.log(age);
console.log(age in student);
for (const obj in student) {
  console.log(obj,student[obj]);
}*/

/*function search(userNumber) {
if ( !isNaN(userNumber) && userNumber!==0) {
  let sum=0;
  for(let i=100;i<1000;i++){
if (i%userNumber==0) {
  sum+=i
}
  }
  return sum
  
} else {
  alert("Zehmet olmasa duzgun eded daxil edin")
  return
}
}
let user=+prompt("Eded daxil edin")
console.log(search(user));*/

/*1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın */

// function search() {
//   let sade=[]
//   let murekkeb=[]
//   for(let num=2;num<100;num++){
//    let isprime=true
//     for(let i=2;i<=Math.sqrt(num);i++){
//       if (num%i==0) {
//         isprime=false;
//         break
//       }
//     }
//     if (isprime) {
//       sade.push(num)
//     } else {
//       murekkeb.push(num)
//     }
//   }
//   return {sade,murekkeb}
// }
// let result=search()
// console.log(result.sade);

// function text(userText) {
//   // return userText.indexOf(".")
//   // return userText.split(" ").reverse().join(" ")
//   // let regex=/\d/
//   // if (regex.test(userText)) {
//   //   console.log("reqem var");
//   // }else{
//   //   alert("yoxdu reqem")
//   // }
//   let bax=userText.split("")
//   let end=bax.join(" ")
//   console.log(bax);
//   return end
// }
// let user=prompt("Metn yaz")
// console.log(text(user));
// let arr=[1,'nar',true,6,'apple','pie',9,1,'nar','nar',true,6,'apple','pie',9,1,'nar','nar',true,6,'apple','pie',9,1,'nar',3,3,5,5,6,7,7,7,8]
// // let end=arr.filter(item=>typeof item===  "number" && !isNaN(item))
// // console.log(end);
// let bax=[...new Set(arr)]
// console.log(bax);
// bax.filter((item,index,array)=>array.indexOf(item)===index)
// console.log(bax);
// function word(text) {
//   let end=text.split(" ").filter(item=>item)
//   // console.log(end.length);
//   return end.length
// }
// let user=prompt("Cumle yazin")
// console.log(word(user));
// let arr1=[1,2,3,4,5]
// let arr2=[1,2,3,4,5,6]
// arr1=arr2
// console.log(arr1);
// console.log(arr1===arr2);
// function repeatWords(text) {
//   let arr=text.split(/\s+/)
//   let wordcount={}
//   for (const words of arr) {
//     // console.log(words);
//     if (wordcount[words]) {
//       wordcount[words]++
//     }else{
//       wordcount[words]=1
//     }
//   }
//   let repeatWord=0
//   for (const words in wordcount) {
//     if (wordcount[words]>1) {
//       repeatWord++
//     }
//   }
//   return repeatWord
// }
// let user=prompt("Cumle yazin")
// console.log(repeatWords(user));

// function getInfo(ad,soyad,age,city) {
//   this.ad=ad
//   this.soyad=soyad
//   this.age=age
//   this.city=city
// }
// let myInfo=new getInfo('ulvi','huseynov',23,'baku')
// console.log(myInfo.age);
// class Myclass {
//   constructor (name,surname,job){

//     this.name=name
//     this.surname=surname
//     this.job=job
//   }
// }
// let Person=new Myclass("andrey",'yasamalli','bomus')
// console.log(Person.surname);

// const x = (a,b=2)=>a+b, y = x(5); console.log(typeof y, y === 7);console.log(y);

// function calc(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       alert(+num1 + +num2);
//       break;
//     case "-":
//       alert(num1 - num2);
//       break;
//     case "*":
//       alert(num1 * num2);
//       break;
//     case "/":
//       alert(num1 / num2);
//       break;
//     default:
//       break;
//   }
// }
// let user = prompt("Reqemleri ve operatoru daxil edin: Meselen 3,5,+");
// let arr = user.split(",");
// console.log(arr);
// let num1 = arr[0];
// let num2 = arr[1];
// let operator = arr[2];
// calc(num1, num2, operator);


// function checkNumber(num1, ) {
  /* if (Number(userNum)<0) {
  // // }*/
  // console.log(typeof num1);
  // if (+num1>+num2&&+num1>+num3) {
  //   console.log('Num1 boyuk');
  // } else if (+num2>+num1&&+num2>+num3)  {
  //   console.log('Num2 boyuk');
  // }
  // else if (+num3>+num1&&+num3>+num2)  {
  //   console.log('Num3 boyuk');
  // }else{
  //   console.log('Beraber');
  // }
  // if (+num1<+num2&&+num1<+num3) {
  //   console.log('Num1 Kicik');
  // } else if (+num2<+num1&&+num2<+num3)  {
  //   console.log('Num2 Kicik');
  // }
  // else if (+num3<+num1&&+num3<+num2)  {
  //   console.log('Num3 Kicik');
  // }else{
  //   console.log('Beraber');
  // }
  // console.log(+num1+ +num2+ +num3);
  // console.log(Math.pow(num1,num2));
//  console.log(4*num1);
//  console.log(num1*num1);
// }
// let user = prompt("Reqemleri ve operatoru daxil edin: Meselen 3,5");
// let arr = user.split("");
// console.log(arr);
// let num1 = arr[0];
// let num2 = arr[1];
// let num3 = arr[2];
// checkNumber(num1, );

// function isPrime() {
//   let sade=[]
//   let murekkeb=[]
//   for (let i = 2; i < 100; i++) {
//    let isPrime=true
//     for (let j = 2; j<=Math.sqrt(i); j++) {
//       if (i%j==0) {
//         isPrime=false
//         break
//       }
      
//     }
//   if (isPrime) {
//    sade.push(i);
//   } else {
//     murekkeb.push(i)
//   }
//   }
//   return {sade,murekkeb}
// }

// const end=isPrime()
// console.log(end.sade);
// console.log(end.murekkeb);

function linear(array,target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]===target) {
      return i
    }
  
    
  }
  return -1
}
console.log(linear([12,34,54,23,87,5,90,76],121));
function factorial() {
  let num=1
  for (let i = 1; i <=3; i++) {
    num=num*i
    
  }
  return num
}
console.log(factorial());