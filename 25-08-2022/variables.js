// let, var and const
// we don't need to define data types while creating variables, so we can assign any value whether string
// boolean or number to a variable and that is why javaScript is known as loosely typed language

let a = 2
console.log(a)

var b = 3
console.log(b)

const c = 4
console.log(c)

a = 5
console.log(a)

b = 6
console.log(b)

c = 4 // will  lead to an error , Assignment to constant variable
console.log(c) 

let x = 4
let X = 5
console.log(x,X) //javascript is case-sensitive

let Bhavesh = "bhavesh"
let bhavesh = "bhavesh"
let _bhavesh = "underscore_bhavesh"
let $bhavesh = "dollar"

//not valid names
// let 1b
// let @b
// let let

//industry standard to name variables is camelCase

let bhaveshBansal
let helloWorld

