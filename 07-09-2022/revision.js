// let array = [['name', 'bhavesh'], ['designation', 'instructor'], ['degree', 'btech']]

// let object = {}

// for(let i = 0; i< array.length; i++) {
//     object[array[i][0]] = array[i][1]
// }

// console.log(object)

// let array2 = [[1,2,4,5,566,5],[23213,32,32,4,324,23,4,324,432],[3,32,4,234,234,23,4,324,34]]

// let object2 = {}

// for(let i = 0; i < array2.length; i++) {
//     let sum = 0
//     for(let j = 0; j < array2[i].length; j++) {
//         sum += array2[i][j]
//     }
//     object2[i] = sum
// }

// console.log(object2)

// 'bhavesh'  + 'bansal' => 'bhaveshbansal'


// function sum (a,b) {
//     return a + b
// }

// console.log(sum(1,'2'))

// function sumArr(arr) {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// let array = [1,2,3,4,5]
// console.log(sumArr(array))

// explain the problem statement 
// input : [[1,2,3],[4,5,6]]
// output: { 0 : 6, 1 : 15}
let arr = [[1,2,3],[4,5,6]]
let obj = {}
function sumArr(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

for(let i = 0; i< arr.length; i++) {
    obj[i] = sumArr(arr[i])
}

console.log(obj)