const fs = require('fs')

// write a file

// fs.writeFileSync('test.txt','this is first time i am using fs.')

// read file

// const data = fs.readFileSync('./test.txt','utf-8')
// console.log(data)



// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     console.log(data, err)
//     fs.writeFile('test.txt', 'hey i am fine.', () => {
//         console.log('file writing completed')
//     })
// })

// write 8 files synchrounously with random numbers

// for(let i= 1; i<= 8; i++) {
//     fs.writeFileSync(`test${i}.txt`,JSON.stringify(Math.round(Math.random()*100)))
//     console.log(`file ${i} wrote successfully.`)
//     const data = fs.readFileSync(`test${i}.txt`,'utf-8')
//     console.log(data)
// }

for (let i = 1; i <= 8; i++) {
    fs.writeFile(`test${i}.txt`, JSON.stringify(Math.round(Math.random() * 100)), () => {
        console.log(`file ${i} wrote successfully.`)
        fs.readFile(`test${i}.txt`, 'utf-8', (err, data) => {
            console.log(`file ${i} read successfully.`)
            console.log(data)
            fs.readFile(`test${i}.txt`, 'utf-8', (err, data) => {
                console.log(`file ${i} read successfully.`)
                console.log(data)
                fs.readFile(`test${i}.txt`, 'utf-8', (err, data) => {
                    console.log(`file ${i} read successfully.`)
                    console.log(data)
                    fs.readFile(`test${i}.txt`, 'utf-8', (err, data) => {
                        console.log(`file ${i} read successfully.`)
                        console.log(data)
                        fs.readFile(`test${i}.txt`, 'utf-8', (err, data) => {
                            console.log(`file ${i} read successfully.`)
                            console.log(data)
                            fs.readFile(`test${i}.txt`, 'utf-8', (err, data) => {
                                console.log(`file ${i} read successfully.`)
                                console.log(data)
                                fs.readFile(`test${i}.txt`, 'utf-8', (err, data) => {
                                    console.log(`file ${i} read successfully.`)
                                    console.log(data)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
