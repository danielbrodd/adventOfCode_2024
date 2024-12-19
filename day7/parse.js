const fs = require('fs')

function parse(path) {
    const text = fs.readFileSync(path,'utf8');
    let lines;
    let result = {};
    if (process.platform === 'win32') {
        lines = text.split('\r\n');
    }
    else {
        lines = text.split('\n');
    }
    lines.pop();
    lines.forEach(line => {
        let arr = line.split(': ');
        let key = arr.shift();
        arr = arr[0].split(' ').map(Number);
        result[key] = arr;

    })
    return result
};

module.exports = parse;
