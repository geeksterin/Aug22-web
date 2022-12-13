const searchInput = document.getElementById('search_input');
const searchButton = document.getElementById('search_button');
const definition = document.getElementById('definition');
const defAudio = document.getElementById('def_audio');

init()

function init() {
    searchButton.addEventListener('click', getDefinition)
}

async function getDefinition() {
    if (searchInput.value) {
        const streamResponse = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchInput.value}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
        const textBody = await streamResponse.text()
        const jsonData = JSON.parse(textBody)
        if(jsonData[0].hwi) {
            if(jsonData[0].hwi.prs) {
                const audioName = jsonData[0].hwi.prs[0].sound.audio
                const audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${getAudioSubdirectory(audioName)}/${audioName}.mp3`
                defAudio.setAttribute('src', audioUrl)
            }
            const shortDef = jsonData[0].shortdef[0]
            definition.innerText = shortDef
            
        } else {
            searchInput.value = jsonData[0]
            getDefinition()
        }
    }

}

function getAudioSubdirectory(audioName) {
    if (audioName.startsWith('bix')) {
        return 'bix'
    } else if (audioName.startsWith('gg')) {
        return 'gg'
    } else if (!isNaN(audioName[0])) {
        return 'number'
    } else {
        return audioName[0]
    }
}
