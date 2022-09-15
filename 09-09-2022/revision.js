// our own split function

// function split(actualString, splitString) {
//     let answer = []
//     let temp = ""
//     for(let i = 0; i < actualString.length; i++) {
//         const splitStringLength = splitString.length
//         const subStringOfActualString = actualString.substr(i,splitStringLength)
//         if(subStringOfActualString !== splitString) {
//             temp += actualString[i]
//         } else {
//             answer.push(temp)
//             temp = ""
//             i += splitStringLength - 1
//         }
//     }
//     answer.push(temp)
//     return answer

// }

// console.log(split('who is','is'))


// function print() {
//     console.log(arguments.length)
// }

// print(1,2,3,4,54,5,6,6,77)

// const print = () => {
//     console.log(arguments)
// }
// print(12,234,4,234,2324,324,234,21,423)


// class abc {
//     print(params) {
//         console.log(this.print)
//     }
// }

// const obj = new abc()
// obj.print()

// let arr = [1,2,3,4,5,6,7,6,9] 
// console.log(arr.at(-1)) // or arr[arr.length - 1]

// let arr = ['a', 'b', 'd', 'c', 'abf']
// console.log(arr.sort(function (a, b) {
//     if (a > b) {
//         return 1
//     } else if (a === b) {
//         return 0
//     } else {
//         return -1
//     }

//     // a.charCodeAt(0) - b.charCodeAt(0)
// }))

// [[1],[5],[7],[4]] => [[1],[4],[5],[7]]

// let arr = [[2], [1], [5], [3], [4]]

// console.log(arr.sort(function (a, b) {
//     if (a[0] > b[0]) return +1
//     else if (a[0] === b[0]) return 0
//     else return -1
// }))

// let arr = ['2', '1', '15', '3', '4']

// console.log(arr.sort(function (a, b) {
//     if (a > b) return +1
//     else if (a === b) return 0
//     else return -1
// }))

// let arr = [{ value: 3 }, { value: 1 }, { value: 4 }, { value: 2 }] // [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]

// console.log(arr.sort(function (a, b) {
//     if (a['value'] > b['value']) return +1
//     else if (a['value'] === b['value']) return 0
//     else return -1
// }))

let obj = {
    subjects: ['math', 'english', 'hindi', 'science'],
    marks: [95, 80, 92, 88]
}

obj.subjects = obj.subjects.sort(function(a,b) {
    const marksOfA = getMarks(a)
    const marksOfB = getMarks(b)
    if(marksOfA > marksOfB) return +1
    else if(marksOfA < marksOfB) return -1
    else return 0
})

function getMarks(subject) {
    const indexOfSubject = obj.subjects.indexOf(subject)
    const marksOfSubject = obj.marks[indexOfSubject]
    return marksOfSubject
}

obj.marks = obj.marks.sort(function(a,b) {
    if(a > b) return +1
    else if(a === b) return 0
    else return -1
})
console.log(obj)
    
// let arr = [{
//     subjects: ['math', 'english', 'hindi', 'science'],
//     marks: [95, 80, 92, 88]
// }, {
//     subjects: ['physics', 'english', 'chemistry', 'science'],
//     marks: [45, 80, 92, 88]
// }, {
//     subjects: ['math', 'physical', 'hindi', 'science'],
//     marks: [80, 80, 92, 88]
// }]