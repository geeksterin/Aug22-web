// function validateName(name) {
//     if(name.length >= 3 && name.length <= 16) {
//         nameCopy = name.toLowerCase()
//         let flag = true
//         for(let i = 0; i< nameCopy.length; i++) {
//             if(!(nameCopy.charCodeAt(i) >= 97 && nameCopy.charCodeAt(i) <= 122)) {
//                 flag = false
//                 break
//             }
//         }
//         return flag
//     } else {
//         return false
//     }
// }

function validateName(name) {
    if(name.length >= 3 && name.length <= 16) {
        return name.match(/[A-Za-z]/gi).join("") === name
    } else {
        return false
    }
}

console.log(validateName("‎abc"))
console.log("‎abc".length)