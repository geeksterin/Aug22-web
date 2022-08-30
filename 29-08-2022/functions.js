// function print(statement) {
//     console.log(statement)
// }

// print("hello")

// function sum1(a,b) {
//     console.log(a + b)
// }

// sum1(1,2,3)

// function sum2(a,b) {
//     console.log(a + b)
// }

// sum2(1)

// function sum3(a,b = 3) {
//     console.log(a + b)
// }

// sum3(1)

// function sum4(a,b = 3) {
//     console.log(a + b)
// }

// sum4(1,5)


// function sum5(a,b,c) {
//     console.log(b + c) // 2 + undefined
// }

// console.log(sum5(1,2)) // value of this statement undefined

// function square(num) {
//     return (num * num)
// }
// square(2)

// //first-order functions

// const abc = function() {
//     console.log('abc')
// }

// console.log(square)
// console.log(abc)

// function highOrder(abc2) {
//     console.log(abc2, "abc2")
//     abc2()
// } // the functions those have functions as a parameter are known as high order functions

// highOrder(abc)

// // arrow functions

// const singleArgument = arg => arg

// const arrow = () => console.log('i am a arrow function')

// singleArgument('abc')


// console.log(function(){}) //anonymous function




// function normal() {
//     const arrow = () => {
//         console.log(this, "hello") // will be pointing to normal function
//     }
//     arrow()
//     console.log(this, "hello2") // will also be pointing to normal function
// }

// normal()

// this example is to teach binding concept
// const obj = {
//     name: "bhavesh",
//     arrowFn: () => {
//         console.log(this.name)
//     }
// }

// obj.arrowFn()

function normal() {
    console.log(arguments)
}

normal(1,2,6,4,434532,55,5,34,5)
const arrow = () => {
    console.log(arguments)
}

arrow(1,2,324,43,5,345,345,345,54)

const coptFunc = new arrow(1,2,3)
console.log(coptFunc)







