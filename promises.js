
// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("hello")
//     }, 3000)
// })

// promise.then((data) => {
//     console.log('i am resolved', promise, data)
// }).catch((error) => {
//     console.log('i am rejected', promise, error)
// })


// console.log(1)
// new Promise((res,rej) => {
//     setTimeout(res,3000)
// }).then(() => {
//     console.log(2)
// })

new Promise((res, rej) => {
    setTimeout(res, 1000)
}).then(() => {
    console.log('w1')
    return new Promise((res, rej) => {
        setTimeout(res, 2000)
    })
}).then(() => {
    console.log("w2")
    return new Promise((res, rej) => {
        setTimeout(rej, 3000)
    })
}).then(() => {
    console.log("w3")
    return new Promise((res, rej) => {
        setTimeout(res, 4000)
    })
}).catch((err) => { console.log('error') }).then(() => {
    console.log("w4")
    return new Promise((res, rej) => {
        setTimeout(res, 5000)
    })
}).then(() => {
    console.log("w5")
})