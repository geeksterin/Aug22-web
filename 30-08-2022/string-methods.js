let str = 'String'
console.log(str.length)

console.log(str.charAt(2))

console.log(str.toUpperCase())

console.log(str.toLowerCase())

console.log(str.substr(1,3))

console.log(str.substring(1,3))


let newStr = '     hey how are you    '
console.log(newStr.length)
console.log(newStr.split(' '))
console.log(newStr.split('h'))
console.log(newStr.split('r'))

let str2 = "finland, switzerland, india"
console.log(str2.split(", "))

console.log(newStr.trim().length)

console.log(newStr.includes('how'))

console.log(newStr.includes('hows'))

let nameStr = 'my name is variable variable'

// console.log(nameStr.replaceAll('variable','bhavesh'))
function replaceAll (str) {
    while(str.includes('variable')) {
        str = str.replace('variable','bhavesh')
    }
    return str
}

console.log(replaceAll(nameStr))


// reverse the string

// check if string is a palindrome

