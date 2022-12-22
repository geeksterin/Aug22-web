const quote = document.getElementById("quote")
const author = document.getElementById("author")
const nextButton = document.getElementById("next_button")

init()

function init() {
    fetchRandomQuote()
    nextButton.addEventListener('click',fetchRandomQuote)
}

async function fetchRandomQuote() {
    const streamResponse = await fetch('https://api.quotable.io/random')
    const textBody = await streamResponse.text()
    const jsonData = JSON.parse(textBody)
    author.innerText = jsonData.author
    quote.innerHTML = `<span style="color: red;">&#8220;</span>${jsonData.content}<span style="color: red;">&#8221;</span>`
}