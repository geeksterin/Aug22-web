for(let i = 0; i < 10;i++) {
    
    if(i === 5) {
        continue
    }
    console.log(i)
}

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(i,j)
    }
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]
for(let i = 0; i< arr.length; i++) {
    for(let j =0; j < arr[i].length; j++) {
        console.log(arr[i][j])
    }
}