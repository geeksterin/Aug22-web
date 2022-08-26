let obj = {
    name: "bhavesh",
    experience: 3,
    4: "abc"
}

console.log(obj)
console.log(obj.name)
console.log(obj['name'])
console.log(obj[4])

let arr = [1, 2, 3]
console.log(typeof arr)

let arr2 = [{ 0: "bhavesh" }]
console.log(arr2[0][0])
let obj2 = {
    0: {
        name: "bhavesh"
    },
    experience: 3
}
console.log(obj2[0].name)

console.log(Object.keys(obj2)) // Array of keys
console.log(Object.values(obj2)) //Array of values
console.log(Object.keys(obj2[0]))
console.log(Object.values(obj2[0])) //Array of values of nested object

// [ 'name' ]

