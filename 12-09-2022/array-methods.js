let arr = [1,2,3,4,5,6,7,8]
// console.log(arr.slice(1,3)) // substring // make a copy of elements
// console.log(arr)
// console.log(arr.splice(0,2)) // substr // remove elements
// console.log(arr)

// for(let i = 1; i <= arr.length; i++) {
//     console.log(arr.slice(0,i))
// }


// for(let i = 0; i < arr.length; i++) { // o(n)
//     console.log(arr.slice(i,arr.length)) // o(n)
// }

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr.slice(i,i+1)) // o(1)
// }

// arr.splice(2,2,9,10,11,12,13,14,15)
// console.log(arr)

// arr.splice(2,3,13,14,15) // remove and replace
// console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(1)
console.log(arr)
console.log(arr.reverse())