
//* task 1
let letterCount=0

function getLetter(letter) {
  let arr=letter.split(" ").filter(item=>{
    letterCount+=item.length
  })
  return letterCount
}
let text='Mən Turing Academydə Proqramlaşdırma dərsi alıram' 
console.log(getLetter(text));
let count=0


for (let i = 0; i < text.length; i++) {
if(text[i]===" "){
continue
}
  count+=text[i].length
}
console.log(count);
console.log("-----------------------------------------------");
console.log("-----------------------------------------------");
/**
//  ? 1) tələbələr massivində sinif-i 100 və ya 95- ə başına olan hərəkətin adlarını consolda yazdırın;
// ! 2) student arrayində adındakı hərflərin sayı 5 və 5-dən kiçik olanların sayı consolda yazdırın;
// *  3) tələbələr arrayında id-i 8 olan obyektin adını və soyadını consolda yazdırın.
 */




let students=[
  {id:1, ad: "Əli", soyad: "Əlisoy", yaş: 20, sinif: 95},
  {id:2, ad: "Vüsalə", soyad: "Nəbiyeva", yaş: 34 , sinif: 77},
  {id:3, ad: "Aliyə", soyad: "Qurbanzadə", yaş:14, sinif: 98},
  {id:4, ad: "Sabir", soyad: "Nuruyev", yaş :15, sinif: 54},
  {id:5, ad: "Mehman", soyad: "Heydərov", yaş: 22, sinif: 100},
  {id:6, ad: "Sevanə", soyad: "Məmmədli" , yaş:41, sinif: 35},
  {id:7, ad: "İlham", soyad: "Babayev", yaş:24, sinif: 95},
  {id:8, ad: "Namiq", soyad: "Güləhmədov", yaş:20, sinif: 95},
  {id:9, ad: "Aygün", soyad: "Kazımova", yaş:24, sinif: 100}
  ]
 function getClassNumber() {
 for (const student of students) {
   if (student.sinif==95 || student.sinif==100) {
    console.log(student);
    
   }
   }
 }
 

 getClassNumber()
console.log("-----------------------------------------------");
console.log("-----------------------------------------------");
 function getNameCount() {
  for (const student of students) {
    if (student.ad.length<=5) {
     console.log(student);
     
    }
    }
  }
  
 
  getNameCount()

  console.log("-----------------------------------------------");
console.log("-----------------------------------------------");
 function getIdStudent() {
  for (const student of students) {
    if (student.id==8) {
     let fullName=`${student.ad} ${student.soyad}`
     console.log(fullName);
     
    }
    }
  }
  
 
  getIdStudent()