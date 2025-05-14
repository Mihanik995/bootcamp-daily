let planets = {
    Mercury: '#1a1a1a',
    Venus: '#e6e6e6',
    Earth: '#2f6a69',
    Mars: '#993d00',
    Jupiter: '#b07f35',
    Saturn: '#b08f36',
    Uranus: '#5580aa',
    Neptune: '#366896'
}
for (let [planet, color] of Object.entries(planets)){
    let newDiv = document.createElement('div')
    newDiv.id = planet
    newDiv.style.background = color
    newDiv.className = 'planet'
    document.getElementsByTagName('section')[0].appendChild(newDiv)
}