function sum() {
    let answer = 0;
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        answer += arguments[i]
    }
    return answer
}

console.log(sum(1,2,3,4,5,6,7,8,9,10))