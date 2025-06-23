import fs from 'fs'

export function readFile () {
    fs.readFile('./Hello World.txt', 'utf8', (err, data) => {
        if (err) console.error(err);
        else console.log(data);
    })
}

export function writeFile (content) {
    fs.appendFile('Bye World.txt', content, 'utf8', (err) => {
        if (err) console.error(err);
    })
}