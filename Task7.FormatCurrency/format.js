
let number=123456.789
// number=number.toLocaleString("en-US",{style:'currency',currency:'USD'})
// number=number.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
// number=number.toLocaleString("de-DE")
// number=number.toLocaleString(undefined)
// number=number.toLocaleString("az-AZ",{style:"currency",currency:'AZN'})
number=number.toLocaleString('az-AZ', { style: 'currency', currency: 'AZN' });
console.log(number)

const date=new Date()
console.log(date.toLocaleString("en-US"))