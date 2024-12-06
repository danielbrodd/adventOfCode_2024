const fs = require('fs');

function parseFile (path) {
    try {
        const data = fs.readFileSync(path,'utf8');
        const lines = data.split('\r\n');

        let res = [];
        for (line of lines) {
            let stringArray = line.split(" ");
            let subArray = stringArray.map(element => Number(element));
            res.push(subArray);
        }
        return res
    } catch (error) {
        console.log('Error readin file: ', error.message)
    };
}

module.exports = parseFile
