// const promise = new Promise(function(resolve, reject) {
//     resolve("Bhavesh")
// })
// console.log(promise)

// const promise = new Promise(function(resolve, reject) {
//     reject("Some error occured")
// })
// console.log(promise)

// promise.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// console.log(1);
// you can code only here you can 2nd line in .then
// create a gap of 5 seconds between exceution of two lines
// const promise = new Promise(function(res,rej) {
//     setTimeout(() => {
//         res("after 5 sec")
//     },5000)
// })
// console.log(promise)
// promise.then((data) => {
//     console.log(data)
//     console.log(5);
//     console.log(promise)
// })

const promise = new Promise(function(res,rej) {
    res(2)
})

function callback (value1,value2) {
    console.log(value1 + value2)
}

promise.then(callback.bind(this,5))
