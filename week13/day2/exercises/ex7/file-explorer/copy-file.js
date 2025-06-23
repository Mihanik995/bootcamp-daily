const fs = require('fs')

const readFile = fs.createReadStream('./source.txt')
const writeFile = fs.createWriteStream('./destination.txt')

readFile.pipe(writeFile)
