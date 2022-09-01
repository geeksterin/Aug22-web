// let arr = []
// function fillWithStar (n) {
//     for(let i = 0; i < n; i++) {
//         arr[i] = '*'
//     }
// }

// fillWithStar(10)
// console.log(arr)


// fill method

let arr = Array(10).fill([1,3,5])
console.log(arr)


let arr1 = [1,2,3] // => 1,2,3
let arr2 = [4,5,6] // => 4,5,6

console.log(typeof(arr1 + arr2))

console.log(arr1.concat(arr2))

let arr3 = [1,2,3,4,5,2,3,4,6,5] // 1,2,3,4,5,2,3,4,6,5
let obj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 2,
    6: 3,
    7: 4,
    8: 6,
    9: 5
}
console.log(arr3.indexOf(2))
console.log(arr3.lastIndexOf(2))

console.log(Array.isArray(arr3),Array.isArray(obj))
console.log(typeof(arr3),typeof(obj))

console.log(arr3.toString())


