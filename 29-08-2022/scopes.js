// {
//     let abc = 'abc'
//     console.log(abc,"inside block")
// }
// console.log(abc, "outside block")

// {
//     var abc = 123
//     console.log(abc,"inside block")
// }
// console.log(abc, "outside block")

function abc() {
    var num = 123
    {
        let num2 = 5675
        console.log(num2, "inside block")
    }
    console.log(num2,"inside function")
}
abc()

console.log(num)