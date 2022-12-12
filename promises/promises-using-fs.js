const fs = require("fs");

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

function write8Files() {
    let promise = fs.promises.writeFile(`test1.txt`, JSON.stringify(Math.round(Math.random() * 100)))
    for (let i = 2; i <= 8; i++) {
        promise = promise.then(() => {
            console.log(`file${i - 1} written successfully`)
            return fs.promises.writeFile(`test${i}.txt`, JSON.stringify(Math.round(Math.random() * 100)))
        })
    }
}

async function write8Files() {
    for (let i = 1; i <= 8; i++) {
        await fs.promises.writeFile(`test${i}.txt`, JSON.stringify(Math.round(Math.random() * 100))).catch(() => {})
    }
}
write8Files()

// for (let i = 1; i <= 8; i++) {
//     fs.promises.writeFile(`test${i}.txt`, JSON.stringify(Math.round(Math.random() * 100))).then(() => {
//         console.log(`file${i} written successfully`)
//     })
// }

// case 1. no error in any promise
// fs.promises.readFile('test1.txt','utf-8').then((data) => {
//     console.log(data) //94
//     return fs.promises.readFile('test2.txt','utf-8')
// }).then((data) => {
//     console.log(data) //94
//     return fs.promises.readFile('test3.txt','utf-8')
// }).then((data) => {
//     console.log(data)//50
//     // Promise<undefined>
// })

// case 2. For all the promises there is one handle in the end

// fs.promises.readFile('test1.txt','utf-8').then((data) => {
//     console.log(data) //94
//     return fs.promises.readFile('tes.txt','utf-8')
// }).then((data) => {
//     console.log(data)
//     return fs.promises.readFile('test3.txt','utf-8')
// }).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
//     // Promise<undefined>
// })

// console.log("hello")

//case3: every promise have their own handle

// fs.promises.readFile('test1.txt', 'utf-8').then((data) => {
//     console.log(data) //94
//     return fs.promises.readFile('tes.txt', 'utf-8')
// }).catch((err) => {
//     console.log("error") //error
//     return "hey my name is bhavesh"
//     // promise<hey my name is bhavesh>
// }).then((data) => {
//     console.log(data) //hey my name is bhavesh
//     return fs.promises.readFile('test3.txt', 'utf-8')
// }).catch((err) => { console.log("error") }).then((data) => {
//     console.log(data) //50
//     //Promise<undefined>
// }).catch((err) => {
//     console.log("error")
//     // console.log(err)
// }).then((data) => {
//     console.log(data) //undefined
// })

//case 4: first .catch then .then

// fs.promises
//     .readFile("test1.txt", "utf-8")
//     .catch((err) => {
//         console.log("error");
//     })
//     .then((data) => {
//         console.log(data); //94
//         return fs.promises.readFile("tes.txt", "utf-8");
//     })
//     .catch((err) => {
//         console.log("error"); //error
//         // Promise<undefined>
//     })
//     .then((data) => {
//         console.log(data); //undefined
//         return fs.promises.readFile("test3.txt", "utf-8");
//     })
//     .catch((err) => {
//         console.log("error");
//     })
//     .then((data) => {
//         console.log(data); //50
//         //Promise<undefined>
//     }).then((data) => {
//         console.log(data)
//     })

