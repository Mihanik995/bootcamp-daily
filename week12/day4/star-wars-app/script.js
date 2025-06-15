let totalOptions
fetch('https://www.swapi.tech/api/people')
    .then(response => response.json())
    .then(data => totalOptions = data.total_records)
    .catch(e => console.warn(e))

const createTemplate = function (data, property, stamp = property) {
    return `${stamp[0].toUpperCase() + stamp.slice(1)}: ${data.result.properties[property]}`
}

const findSomeone = async function (event) {
    event.preventDefault()
    document.getElementById('name').innerHTML = '<img src="loader.gif"><br>Loading...'
    document.getElementById('home-world').innerText = ''
    document.getElementById('height').innerText = ''
    document.getElementById('gender').innerText = ''
    document.getElementById('birth-year').innerText = ''
    if (totalOptions) {
        let currentOption = Math.floor(Math.random() * totalOptions)
        currentOption === 0 ? currentOption++ : currentOption
        fetch(`https://www.swapi.tech/api/people/${currentOption}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(async data => {
                document.getElementById('home-world').innerText =
                    createTemplate(await (await fetch(data.result.properties.homeworld)).json(), 'name', 'Home world')
                document.getElementById('name').innerText = data.result.properties.name
                document.getElementById('height').innerText = createTemplate(data, 'height')
                document.getElementById('gender').innerText = createTemplate(data, 'gender')
                document.getElementById('birth-year').innerText = createTemplate(data, 'birth_year', 'Birth Year')
            })
            .catch(e => {
                console.warn(e)
                document.getElementById('name').innerText = 'Sorry! Something went wrong...'
            })
    }
}