// async function print() {

const { text } = require("stream/consumers")

// }
// console.log(print())


// async function test() {
//     console.log(1)
//     await new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(2)
//         }, 2000)
//     })
//     console.log(3)
// console.log(4)
// }

// test()

// function test() {
//     return new Promise(() => {
//         console.log(1)
//         new Promise((res, rej) => {
//             setTimeout(() => {
//                 res()
//                 console.log(2)
//             }, 2000)
//         }).then(() => {
//             console.log(3)
//             console.log(4)
//         })
//     })
// }
// test()


// function sum(a,b) {
//     return a + b
// }

// function sum(a,b) {
//     return new Promise((res,rej) => {
//         res(a + b)
//     })
// }

// async function sum(a,b) {
//     return a + b
// }

console.log(sum(1,2))