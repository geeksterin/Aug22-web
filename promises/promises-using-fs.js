const fs = require('fs')

// const promise = fs.promises.readFile('tes.txt','utf-8')
// console.log(promise)
// promise.then((data) => {
//     console.log(data,promise)
// }).catch((err) => {
//     console.log(err,promise)
// })

// fs.promises.writeFile('test.txt', 'this is second time.').then(() => {
//     fs.promises.readFile('test.txt','utf-8').then((data) => {
//         console.log(data)
//     })
// })

// fs.promises.writeFile('test.txt', 'this is second time.').then(() => {
//     return fs.promises.readFile('test.txt', 'utf-8')
// }).then((data) => {
//     console.log(data)
// })

// const promise1 = fs.promises.writeFile('test.txt', 'this is third time.')

// const promise2 = promise1.then(() => {
//     return fs.promises.readFile('test.txt', 'utf-8')
// })

// promise2.then((data) => {
//     console.log(data)
// })

// let promise = fs.promises.writeFile(`test1.txt`, JSON.stringify(Math.round(Math.random() * 100)))
// for (let i = 2; i <= 8; i++) {
//     promise = promise.then(() => {
//         console.log(`file${i-1} written successfully`)
//         return fs.promises.writeFile(`test${i}.txt`, JSON.stringify(Math.round(Math.random() * 100)))
//     })
// }

for (let i = 1; i <= 8; i++) {
    fs.promises.writeFile(`test${i}.txt`, JSON.stringify(Math.round(Math.random() * 100))).then(() => {
        console.log(`file${i} written successfully`)
    })
}