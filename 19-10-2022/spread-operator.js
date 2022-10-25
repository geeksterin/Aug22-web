// let obj1 = {
//     name: "bhavesh",
//     data: {
//         company: "Appbrew"
//     }
// }

// let obj2 = {...obj1}
// obj2.data.company = "geekster"
// obj2.name="rakshit"
// console.log(obj1,obj2)

// let arr1 = [[1,2,3],3,4,[5,[6,7]]]
// let arr2 = [...arr1]
// arr2[1] = 5
// arr2[0] = 6
// arr2[3][1][1] = 9
// console.log(arr1,arr2)

let match1 = {
    matchName: 'ind vs pak',
    matchType: 'T20',
    team1Players: ['rohit','virat'],
    team2Player: ['babar','rizvan'],
    team1Scores: {
        0.1: 6,
        1.2: 2
    },
    team1TotalScore: 250
}

let match2 = {...match1}

match2.matchName = 'ind vs nz'
match2.matchType = 'ODI'
match2.team1Players[1] = 'Hardik'
match2.team1Scores['1.2'] = 6
console.log(match1,match2)