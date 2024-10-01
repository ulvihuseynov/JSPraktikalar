// function factorial(n) {
//     // let m=1
//     // for (let i = 2; i <=n; i++) {
//     //    m*=i
        
//     // }
//     // return m
//     if (n<2) {
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5))

// function fibonacci(n) {
// //     const fib=[0,1]
// //     for(let i=2; i<n;i++){
// // fib[i]=fib[i-1]+fib[i-2]
// //     }
// //     return fib
// if (n<2) {
//     return n
// }
// return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(7))

function isPrime(n) {
    if (n<2) {
        return false
    }
    for (let i = 2; i <=Math.sqrt(n); i++) {
       if (n%i==0) {
        return false
       }
    }
    return true
}
console.log(isPrime(1))