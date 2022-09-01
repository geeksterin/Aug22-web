let a = 2
let b = 3

function swap ( a,b) {
    let temp = a
    a = b
    b = temp
    return [a,b]
}
console.log(swap(a,b))