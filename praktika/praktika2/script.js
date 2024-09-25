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
const { name, age, ...istirahet } = person;
console.log(istirahet);

//!Tapşırıq: adı və yaşı olan xassələri olan şəxs adına bir obyekt yaradın. Spread operatorundan istifadə edilə bilən bu obyekti klonlayan və şəhər adı altında yeni bir xassə əlavə edən bir funksiyanı yazın.

const student = {
  name: "John",
  age: 30,
};
//? const student2=student
const student2 = { ...student };
student2.city = "Baku";
delete student2.name;
console.log(student);

console.log(student2);

//!Tapşırıq: İki obyekt verilmişdir: { name: 'Alice' } və { yaş: 25 }. Onları spread operatorundan istifadə Tap tək bir obyektə birləşin.Yüksək Səviyyəli Tapşırıqlar

const obj = {
  name: "Alice",
};
const obj2 = {
  age: 25,
};
const obj3 = Object.assign(obj, obj2);
//  const obj3={...obj,...obj2}
obj.city = "Madrid";
console.log(obj3);

//*: İstənilən sayda massivi qəbul edən və onları yaymaq və istirahət operatorları ilə bir array-ə birləşdirən mergeAndMultiply funksiyasını yazın. Sonra həmin birləşdirilmişarray-dəki bütün ədədlərin hasilini qaytarın.

function mergeAndMultiply(...array) {
  //  let mergeArr=[...arr0,...arr1,...arr2,...arr3]
  let count = 0;
  let mergeArr = [...array];
  let flatten = mergeArr.flat(2);

  flatten.map((item) => {
    return (count += item);
  });
  return count;
}

let array0 = [3, 5, 7, 9, 11];
let array1 = [2, 4, 8, 10, 12];
let array2 = [21, 23, 25, 27, 29];
let array3 = [22, 24, 26, 28, 30];
console.log(mergeAndMultiply(array0, array1, array2, array3));

//*Tapşırıq: ad və yaş xassələri olan obyektlərdən bir array qəbul edən funksiyanı yazın. İstirahət və yayılma operatorları ilə hər bir obyektə əlavə əlavə edin və dəyişdirilmiş array-i qaytarın.

function getArray(...skills) {
  let arr = [...skills];
  let newarr = (arr[0].skills = "react");
  console.log(newarr);
}

const object = {
  names: "Jack",
  ages: 56,
  skills: ["html", "css", "js", "vue"],
};
const { names, ages, ...rests } = object;
//    console.log(rests)
console.log(getArray(rests));

function user(userName, surName) {
  console.log(this);
}
user();

var number = function (busStops) {
  // Good Luck!
  let odd = 0;
  let even = 0;
  let flatten = busStops.flat(2);
  for (let i = 0; i < flatten.length; i++) {
    if (i % 2 == 0) {
      odd += flatten[i];
    } else {
      even += flatten[i];
    }
  }
  return odd - even;
};
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);

function switcheroo(x) {
  return [...x]
    .map((e) => (e == "b" ? (e = "a") : e == "a" ? (e = "b") : e))
    .join("");
}
//https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions
//https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

console.log(switcheroo("aaabcccbaaa"));

// const myFunc = function (name, surName, age, city, job) {
//   this.name = name;
//   this.surName = surName;
//   this.age = age;
//   this.city = city;
//   this.job = job;
//   this.birthYear = function () {
//     const date = new Date();
//     return date.getFullYear() - this.age;
//   };
// };

// const Person= new myFunc('John','Doe',34,'London','Developer')
// console.log(Person.birthYear());

/*
Kitabxana obyekti yaradın:
Obyektdə bir sıra kitab obyektləri saxlayan bir xüsusiyyət kitab olmalıdır.
Kitabxana obyektində metodları müəyyənləşdirin:
addBook(book): Kitablar massivinə yeni kitab obyekti əlavə edir.
checkAvailability(title): Verilmiş başlığa malik kitabın mövcud olub olmadığını yoxlayır.
borrowBook(title): Kitab mövcuddursa, kitabın isAvailable statusunu yalana dəyişir.
returnBook(title): Kitabın isAvailable statusunu doğru olaraq dəyişir.
listAvailableBooks(): isAvailable true olaraq təyin edilmiş bütün kitabları siyahıya alır.
*/

class Library {
  constructor(book, author, releaseYear, genre, readership, price,isAvailable) {
    this.book = book;
    this.author = author;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.readership = readership;
    this.price = price;
    this.isAvailable=isAvailable;
    // this.books=[]
    // this.list
  }
   books=[]
list=[]
  addBook(book) {
return this.books.push(book)
  }


  checkAvailability(title) { 
    return this.book==title ? console.log('kitab var') : console.log('yoxdu')
  }


  borrowBook(title) {
    return this.books.includes(title) ? this.isAvailable=false : this.isAvailable=true
  }


  returnBook(title) {

  }


  listAvailableBooks(isAvailable) {
   
   return  this.isAvailable==true ? this.list.push() : []

  }
}

const book1=new Library("To Kill a Mockingbird","Harper Lee", 1960,"Tarixi Fikri, Sosial Ədəbiyyat", 4000000, `${20}$`,true)
const book2=new Library("1984","George Orwell", 1949,"Distopiya, Elmi Fikri, Siyasi Fikri", 3000000, `${15}$`,true)
const book3=new Library("The Great Gatsby","F. Scott Fitzgerald", 1925,"T Modernist Ədəbiyyat, Dram", 2500000, `${18}$`,true)
const book4=new Library("Pride and Prejudice","Jane Austen", 1813,"Romantik Ədəbiyyat, Sosial Kritik", 2000000, `${12}$`,true)
const book5=new Library("The Catcher in the Rye","J.D. Salinger", 1951,"Coming-of-Age, Dram", 1500000, `${14}$`,true)


console.log("-------------------------------")
console.log("-------------------------------")
console.log("-------------------------------")
console.log("-------------------------------")

console.log(book1)
console.log(book2)
console.log(book3)
console.log(book4)
console.log(book5)


console.log(book1.checkAvailability("To Kill a Mockingbird"))


book3.addBook('Cerpeleng ucuran')
book3.addBook('Esre beraber bir gun')


book4.addBook('Poct qutusu');
book4.addBook('Kimsesiz ada')


console.log(book3.books)
console.log(book4.borrowBook('Poct qutusu'))
console.log(book5.listAvailableBooks(true))


function findUniq(arr) {
  // do magic
  return arr.filter((item,index)=>{
   return arr.indexOf(item)==index
  })
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])
)