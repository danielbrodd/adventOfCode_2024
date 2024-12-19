const fs = require('fs')


function parse(path) {
    const txt = fs.readFileSync(path, 'utf8')
    let lines;
    if (process.platform === 'win32') {
        lines = txt.split('\r\n')
    }
    else {
        lines = txt.split('\n')
    }
    let arr  = lines.map(line => line.split(''))
    arr.pop()
    return arr
}

module.exports = parse
