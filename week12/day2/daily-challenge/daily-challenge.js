const APIKEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'

const generateRandomId = function () {
    let randomId
    const gifs = document.getElementById('gifs')
    do {
        randomId = Math.floor(Math.random() * 1000000)
    } while (gifs.innerText && [...gifs.children].some(elem => +elem.id === randomId))
    return randomId
}

const addGif = function (data) {
    const newGif = document.createElement('img')
    newGif.src = data.data.images.fixed_height.url

    const newButton = document.createElement('button')
    newButton.innerText = 'Delete'

    const newId = generateRandomId()
    const newBlock = document.createElement('div')
    newBlock.id = newId
    newBlock.className = 'gif-block'
    newBlock.appendChild(newGif)
    newBlock.appendChild(newButton)

    document.getElementById('gifs').appendChild(newBlock)
    newButton.addEventListener('click', (event) => {
        event.preventDefault()
        document.getElementById(newId).remove()
    })
}

const fetchGif = async function (event) {
    event.preventDefault()
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/' +
            `random?api_key=${APIKEY}&tag=${event.target.tag.value}`)
        if (response.ok) {
            addGif(await response.json())
        }
    } catch (error) {
        console.warn(error)
    }
}

const deleteAll = () => document.getElementById('gifs').innerText = ''