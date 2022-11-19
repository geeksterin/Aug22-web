let arr = [2,1,3,7,5]

function sort (E1, E2) {
    if(E1 > E2) {
        return 1;
    } else if(E1 === E2) {
        return 0;
    } else if(E1 < E2) {
        return -1;
    }
}

console.log(arr.sort(sort))