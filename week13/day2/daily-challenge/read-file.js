import fs from 'fs'

export default function readFile() {
    fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
        if (err) console.error(err)
        else console.log(data)
    })
}