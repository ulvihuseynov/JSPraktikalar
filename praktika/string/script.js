// Bir string götürün və string-də olan saitlərin (a, e, i, o, u) sayını qaytaran funksiya yazın.

function getVowel(str) {
  let vowel = "aeiou";
  let count = 0;
  for (let i = 0; i < vowel.length; i++) {
    // console.log(str.toLowerCase().indexOf(vowel[i].toLowerCase())!=-1);

    if (str.toLowerCase().includes(vowel[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}
let string = "Azerbaijan";
console.log(getVowel(string));

//! Bir string götürün və onu tərsinə çevirən funksiya yazın.

function reverseStr(string) {
  return string.split("").reverse().join("");
}
console.log(reverseStr("funksiya"));

//* Verilmiş string-in palindrom olub-olmadığını (ön tərəfdən və tərsinə oxuduqda eyni olub-olmadığını) yoxlayan funksiya yazın.
function isPlaindrome(str) {
  return str == str.split("").reverse().join("");
}
console.log(isPlaindrome("radar"));
console.log(isPlaindrome("qadagan"));

//* String-dəki hər sözün ilk hərfini böyük yazan funksiya yazın.
function capitalize(str) {
  return str
    .split(" ")
    .map((item, index) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join(" ");
}
let text =
  "   lorem, ipsum dolor sit     amet consectetur adipisicing elit. Deleniti, nulla!";
console.log(capitalize(text));

//?String-də təkrarlanan simvolları silən funksiya yazın. Məsələn, "salam" stringi "salm" olmalıdır.

function getDeleteRepeat(str) {
  let set = [...new Set(str)].join("");
  return set;
}

console.log(getDeleteRepeat("necesen"));
//*Bir string və iki simvol götürən, string-də birinci simvolu ikinci simvolla əvəzləyən funksiya yazın.
function getReplace(string,simvol1,simvol2) {
    
    
    return string.replaceAll(simvol1,simvol2)
}
console.log(getReplace('lorem ipsum doler sit amet','i','I'));

//!String-dəki ən uzun sözü tapan funksiya yazın.
function longWord(str) {
    let uzunSoz=''
    let arr=str.split(' ')

    
    for (const item of arr) {
       if (item.length>=uzunSoz.length) {
        uzunSoz=item
    
       }
     
    }
    return uzunSoz
}
console.log(longWord('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nulla!'));

//*Verilmiş string-dən bütün rəqəmləri çıxaran funksiya yazın.

function getOnlyString(str) {
 let arr=str.split('');
 return arr.filter(item=> isNaN(item)
 ).map(item=>item).join(' ')
}
console.log(getOnlyString('n3cn3s3n 7 10 464 m nv'));

//!Bir cümlə və bir söz götürən və həmin sözün cümlədə neçə dəfə təkrarlanmasını qaytaran funksiya yazın.
function repeatWord(text,word) {
  let count=0
  let arr=text.split(' ')
  for (const item of arr) {
    if (item==word) {
     count++;
    }
    
  }
  return count
}
  
let sentence='Lorem ipsum, dolor  amet consectetur amet amet amet amet adipisicing elit. Vitae, quas. sit sit'
let word='amet'
console.log(repeatWord(sentence,word));
