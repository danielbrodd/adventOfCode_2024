// Parser

const fs = require('fs')

function parse(path) {
    const data = fs.readFileSync(path, 'utf8')
    const lines = data.split('\r\n')
    let parsed = []
    for (let line of lines) {
        if(line.trim() === '') continue;
        let stringArray = line.split('')
        parsed.push(stringArray)
    }
    return parsed
}

module.exports = parse;
