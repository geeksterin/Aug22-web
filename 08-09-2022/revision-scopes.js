// {
//     { { { { { { var a = 10 } } } } } }
// }

// console.log(a)

// {
//     let a = 10
// }
// console.log(a)


// function hello() {
//     if (true) {
//         var a = 'JavaScript'
//         let b = 'C++'
//         const c = 'Python'
//         console.log(a)
//         console.log(b)
//         console.log(c)
//     }
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// hello()

// function hello1() {
//     var fruit1 = 'apple';
//     let fruit2 = 'banana';
//     {
//         var fruit4 = 'strawberry'
//         let fruit3 = 'orange'
//     }
//     console.log(fruit1)
//     console.log(fruit2)
//     console.log(fruit4)
//     console.log(fruit3)
// }
// hello1()

// function test() {
//     var l = 5
//     for (let i = 0; i < l; i++) {
//         console.log(i)
//     }
//     console.log(l)
//     console.log(i)
// }
// test()

// function outside(){
//     function test() {
//         console.log('i am testing')
//     }
// }
// test()

// exceptional case
// function myFunc(p = p + 1) {
//     console.log(p)
// }
// myFunc()

// console.log("".split(","))

function s(str,sub) {
    let arr = []
    let store = ""
    for(let i = 0; i < str.length; i++) {
        if(str[i] != sub) {
            store += str[i]
        } else {
            
        }
    }
}
