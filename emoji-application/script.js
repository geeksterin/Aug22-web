const searchInput = document.getElementById('search_input')
const emojiListContainer = document.getElementById('emoji_list')

init()

function init() {
    renderEmojis()
    searchInput.addEventListener('keyup', renderEmojis)
}

function renderEmojis() {
    let html = ''
    let emojiListCopy = [...emojiList]
    const inputValue = searchInput.value
    emojiListCopy = emojiListCopy.filter((emoji) => {
        let flag = false
        for (let i = 0; i < emoji.tags.length; i++) {
            if (emoji.tags[i].toLowerCase().includes(inputValue.toLowerCase())) {
                flag = true
                break
            }
        }
        return flag
    })
    for (let i = 0; i < emojiListCopy.length; i++) {
        html += `<div class="emoji_row">
        <span class="emoji">${emojiListCopy[i].emoji}</span>
        <span class="emoji_name">${emojiListCopy[i].aliases[0]}</span>
        <span class="emoji_description">${emojiListCopy[i].description}</span>
      </div>`
    }
    emojiListContainer.innerHTML = html
}

