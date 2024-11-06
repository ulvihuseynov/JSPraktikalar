

//! Fisher-Yates Shuffle

function shuffle(array){

    for(let i=array.length-1; i>0;i--){
let random=Math.floor(Math.random()*(i+1));
// console.log(random)
[array[i],array[random]]=[array[random],array[i]]
    }

    return array
}

let arr=['a',1,'c',5,6,2,4,'t','u','m']
console.log(shuffle(arr))