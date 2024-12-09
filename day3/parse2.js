// PARSER

const fs = require('fs')

function parse(path) {
    try {
        const data = fs.readFileSync(path, 'utf8')
        regex = /mul\(\d{1,3},\s?\d{1,3}\)/gi;

        return parsed = data.match(regex);

    } catch(error) {
        console.log("Error read file: ", error)
    }
}

module.exports = parse;
