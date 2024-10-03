// let arr=['ulvi',6,true,{name:'car'},undefined,null]
// // console.log(arr)
// // console.log(arr[0])
// // console.log(arr[arr.length-1])
// console.log('-----------')
// for (const element in arr) {
//     console.log(arr[element])
// }
// arr.unshift(12)
// console.log(arr)
// let pop=arr.pop()
// console.log(pop)
// console.log(arr)
// // let shift=arr.shift()
// console.log(arr.shift())
// const obj={
//     name:'Ulvi',
//     surName:'Huseynov',
//     age:23,
//     fullname:function () {
//       return `${this.name} ${this.surName}`
//     },
//     skills:['HTML','CSS','JS'],
//     city:'Baku',
//     'is-Married':false
// }

// console.log(obj['is-Married'])
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// const {name,age,skills,...rest}=obj
// console.log(name,age,skills)
// console.log(rest)

// function longestConsec(strarr, k) {
//   // your code
//   return strarr.map((item,index,arr)=>{
//    return item.concat(arr[index+k])
//   })
// }
// let strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
// let k = 2
// console.log(longestConsec(strarr,k))
function longestConsec(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}
let strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
let k = 2;
// console.log(longestConsec(strarr,k))
function checkExam(array1, array2) {
  // good luck
  let result = 0;
  array1.filter((item, index) => {
    if (array2.indexOf(item) == index) {
      console.log(array2.indexOf(item) == index);
      result += 4;
    } else {
      result -= 1;
    }
  });
  return result;
}
let arr1 = ["a", "a", "c", "b"];
let arr2 = ["a", "a", "b", ""];
//  console.log(checkExam(arr1,arr2))
function getNumberFromString(s) {
  return s.replace(/\D+/g, "");
}

let s = "ulb98h";
// let s='u6lv1'
// console.log(getNumberFromString(s))

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let arr = [1, 4, 7, 8, 9, 11, 21, 25];
// console.log(binarySearch(arr,8))
function fibo(n) {
  if (n < 2) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
}
// console.log(fibo(7))

function factorial(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    num *= i;
  }
  return num;
}
// console.log(factorial(5))

//*1 -30 array task

function isPrime() {
  let odd = [];
  let even = [];
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      odd.push(i);
    } else {
      even.push(i);
    }
  }
  return { odd, even };
}
// console.log(isPrime())

let user = "m3n s6k 8u fk4 0";
let reg = /\d/;
console.log(reg.test(user));
let numArr = ["alma", 4, "armud", true, 2, "ulvi"];
console.log(numArr.filter((item) => typeof item === "number"));
let reparr = [1, 2, 4, 1, 2, 9, 6, 3, 9, 1, 2, 6];
let end = reparr.filter((item, index) => {
  return reparr.indexOf(item) == index;
});
console.log(end);
let set = new Set(reparr);
console.log([...set]);
let text =
  "Lorem ipsum dolor,  sit    amet consectetur adipisicing elit. Suscipit, reiciendis.";
let bax = text.split(" ").filter((item) => item).length;
console.log(bax);

function bubbleSort(arr) {
  // console.log(arr)
let n=arr.length
// console.log(n)
for (let i = 0; i < n-1; i++) {
  for (let j = 0; j < n-i-1; j++) {
    if (arr[j].id>arr[j+1].id) {
      [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
    }
    
  }
  
}
return arr
}
let arr4 = [
  { id: 5, name: "andrey", city: "moscow" },
  { id: 1, name: "ulvi", city: "baku" },
  { id: 4, name: "paolo", city: "milan" },
  { id: 3, name: "sam", city: "new york" },
  { id: 2, name: "john", city: "london" },
];

console.log(bubbleSort(arr4))