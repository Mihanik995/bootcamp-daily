const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

const main = document.getElementsByTagName('main')[0]
const input = document.getElementsByTagName('input')[0]

const fillMain  =function () {
    robots.filter(elem => elem.name.toLowerCase().includes(input.value))
        .forEach(elem => {
            const newRobot = document.createElement('div')
            newRobot.className = 'robot'

            const robotImg = document.createElement('img')
            robotImg.src = elem.image
            newRobot.appendChild(robotImg)

            const innerBlock = document.createElement('div')
            innerBlock.className = 'innerBlock'

            const robotName = document.createElement('h3')
            robotName.innerText = elem.name
            innerBlock.appendChild(robotName)

            const robotEmail = document.createElement('p')
            robotEmail.innerText = elem.email
            innerBlock.appendChild(robotEmail)

            newRobot.appendChild(innerBlock)
            main.appendChild(newRobot)
        })
}

fillMain()

input.addEventListener('input', () => {
    main.innerHTML = ''
    fillMain()
})