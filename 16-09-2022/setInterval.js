// let count = 1
// const interval = setInterval(() => {
//     console.log(count)
//     count++
// },2000)

// clearInterval(interval)

// let count = 1
// const interval = setInterval(() => {
//     console.log(count)
    
//     count++
// },1000)

// setTimeout(() => {
//     clearInterval(interval)
// },10500)


let printFlag = true
let count = 1
let actualCount = 1

let innerInterval

let interval = setInterval(() => {
    if(printFlag) {
        console.log(count)
    }
    if(count === 10) {
        printFlag = !printFlag
        count = 0
    }
    count++
    if(actualCount === 60) {
        clearInterval(interval)
    }
    actualCount++
},1000)