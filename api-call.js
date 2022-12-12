

fetch('https://api.github.com/search/users?q=bhavesh').then((response) => {
    return response.text()
}).then((responseString) => {
    console.log(JSON.parse(responseString))
})

//practise
//add query param for per page and sort order via googling
