// Exercise 1
const completeURL = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'

fetch(completeURL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.warn(error))

// Exercise 2
const URL = 'https://api.giphy.com/v1/gifs/search'
const settings = {
    api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
    q: 'sun',
    limit: 10,
    offset: 2
}

const fetchData = async function () {
    const response = await fetch(`${URL}?${
        Object.keys(settings)
            .map(key => `${key}=${settings[key]}`)
            .join('&')
    }`)
    if (response.ok) {
        try {
            const data = await response.json()
            console.log(data)
        } catch (e) {
            console.warn(e)
        }
    }
}
fetchData()

// Exercise 3
const swapi = async function(){
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/")
        if (response.ok) {
            const data = await response.json()
            console.log(data.result)
        }
    }
    catch (e) {
        console.warn(e)
    }
}
swapi()

// Exercise 4
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// the code will log 'calling', and then 'resolved' after 2 seconds