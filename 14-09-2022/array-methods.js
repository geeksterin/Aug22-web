let arr = [1,2,3,4,5,6]

// arr.forEach(function(ele,i) {
//     console.log(i)
//     if(i <= ((arr.length/2) - 1)) {
//         console.log(ele, 'ele')
//     }
// })

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     if(i === ((arr.length/2) - 1)) {
//         break
//     }
// }

// let sum = 0
// arr.forEach(ele => sum += ele)

// console.log(sum)


// arr.reduce(function(prevEle,currEle,currIndex, completeArray) {
//     console.log(completeArray)
//     return 1
// },0)

// console.log(arr.reduce(function(sum,currentElement) {
//     return sum + currentElement
// }, 0))

// console.log(arr.reduce(function(a,b) {
//     console.log(a,b, a * b)
//     return a * b
// },23))


// console.log(arr.reduce(function(prevEle, currEle, currIndex) {
//     if(currIndex < arr.length/2) {
//         return prevEle + currEle
//     } else {
//         return prevEle * currEle
//     }
// }, 0))

let cars = ['honda city', 'ertiga', 'ferrari', 'bmw']

for(let car of cars) { // only elements are required for the business logic
    console.log(car)
}

for(let index in cars) { // when both elements and index are required
    cars[index]
    console.log(index)
}

let obj = {
    "name" : "bhavesh",
    "email": 'bansalbhavesh47@gmail.com'
}

for(let key in obj) {
    console.log(key)
}
