// PARSER

const fs = require('fs')

function parse(path) {
    try {
        const data = fs.readFileSync(path, 'utf8')
        console.log(data)
        let doDont = /(?:^|do\((.*?)\))(.*?)(?=don't\(\)|$)/gs 
        let regex = /mul\(\d{1,3},\s?\d{1,3}\)/gi;
        let data2 = data.match(doDont);
        console.log(data2)
        data1 = data2.map(x => x.match(regex))
        console.log(data1)
        console.log(data1.flat())
        return parsed = data1.flat()

    } catch(error) {
        console.log("Error read file: ", error)
    }
}

module.exports = parse;
