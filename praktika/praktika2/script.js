//?Tapşırıq: Operatordan (...) Yenidən istifadə edilən istənilən sayda arqument qəbul edir və onların cəmini qaytarır, cəmiBütün funksiyalarını yazın.




//*Tapşırıq: Birinci arqument olaraq vurğulanır və istənilən sayda əlavə arqument qəbul edir multiplyBy funksiyasını yazın. Yayılma və istirahət operatorlarından istifadə, hər bir arqumenti (vurğudan sonra) vurğu ilə vurub array qaytarın.*/

//?Tapşırıq: [1, 2, 3, 4, 5] array-i verildikdə, massivlərin dağıdılması və istirahət operatoru kimi ilk iki elementi quraşdırmaq üçün istifadə edin, qalanları üçüncü bir yığın.

let arr = [1, 2, 3, 4, 5];
let [first, second, ...rest] = arr;
console.log(rest);


//!Tapşırıq: { name: 'John', age: 30, city: 'New York', profession: 'Engineer' } obyektini bəzəyir, istirahət operatorundan istifadə adı və yaş məlumatlarını çıxarın, qalan xassələri bir obyektə toplayın.Orta Səviyyəli Tap
const person = {
  name: "John",
  age: 30,
  city: "New York",
  profession: "Engineer",
};
const {name,age,...istirahet}=person
console.log(istirahet);

//!Tapşırıq: adı və yaşı olan xassələri olan şəxs adına bir obyekt yaradın. Spread operatorundan istifadə edilə bilən bu obyekti klonlayan və şəhər adı altında yeni bir xassə əlavə edən bir funksiyanı yazın.

const student={
    name: "John",
    age: 30,

}
//? const student2=student
const student2={...student}
student2.city='Baku'
delete student2.name
console.log(student);

console.log(student2);

//!Tapşırıq: İki obyekt verilmişdir: { name: 'Alice' } və { yaş: 25 }. Onları spread operatorundan istifadə Tap tək bir obyektə birləşin.Yüksək Səviyyəli Tapşırıqlar

const obj={
name:'Alice'
}
 const obj2={
    age:25
 }
 const obj3=Object.assign(obj,obj2)
//  const obj3={...obj,...obj2}
 obj.city='Madrid'
 console.log(obj3);

 //*: İstənilən sayda massivi qəbul edən və onları yaymaq və istirahət operatorları ilə bir array-ə birləşdirən mergeAndMultiply funksiyasını yazın. Sonra həmin birləşdirilmişarray-dəki bütün ədədlərin hasilini qaytarın.

 function mergeAndMultiply(...array) {
//  let mergeArr=[...arr0,...arr1,...arr2,...arr3]
let count=0
 let mergeArr=[...array]
  let flatten=mergeArr.flat(2)

 flatten.map(item=>{
   return count+=item
 })
  return count
 }

 let array0=[3,5,7,9,11]
 let array1=[2,4,8,10,12]
 let array2=[21,23,25,27,29]
 let array3=[22,24,26,28,30]
 console.log(mergeAndMultiply(array0,array1,array2,array3));
 
 
//*Tapşırıq: ad və yaş xassələri olan obyektlərdən bir array qəbul edən funksiyanı yazın. İstirahət və yayılma operatorları ilə hər bir obyektə əlavə əlavə edin və dəyişdirilmiş array-i qaytarın.


function getArray(...skills) {
 let arr=[...skills]
 let newarr=arr[0].skills='react';
console.log(newarr)
}


const object={
    names:'Jack',
    ages:56,
    skills:['html','css','js','vue']
   } 
   const {names,ages,...rests}=object
//    console.log(rests)
   console.log(getArray(rests))