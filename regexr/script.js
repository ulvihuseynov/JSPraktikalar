
// let regex=new RegExp("ulvi","gi")

// let regeX=/'love'/gi
// let text='Ulvi frontend oyrenmeye calisir'
// let pattern=/ulvi/ig
// let result=pattern.test(text)
// console.log(result);

// let text="Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Voluptas, voluptate ipsum ."
// let pat=/ipsuM/
// // console.log(pat.test(text));
// // console.log(text.search(pat));
// console.log(text.replace(pat,'Ulvi'));
// let num="Menim adim Ulvi 23 yasim var. 2000 ci ilde 21 dekabr anadan 233 olmusam";

// let regex=/(\b\d{2,3}\b)/g
// console.log(num.match(regex));
// console.log(/^[a-zA-Z0-9]/.test(num));

// let name='2024-08-04'
// let regex=/(?<il>\d{4})[-](?<ay>\d{2})[-](?<gun>\d{2})/
// let result=regex.exec(name)
// console.log(result.groups.il);
let regex=/(\w+)(\w+)/
let names='ulvi_huseynov'
console.log(regex.test(names))
function is_valid_variable(str) {
    return /^[a-z_]+$/.test(str)
}

console.log(is_valid_variable('first_name'));
 //# True
console.log(is_valid_variable('first-name'));
 //# False
console.log(is_valid_variable('1first_name'));
 //# False
console.log(is_valid_variable('firstname'));
 //# True
 function cleanText(sentence) {
    let regex=/^[a-zA-Z ,]+$/
    return regex.test(sentence)
 }
 let   sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
 let sen='Salam necesen, yaxsinmi '
 console.log(cleanText(sen))
 console.log(window.navigator.geolocation.getCurrentPosition.name)
 
 