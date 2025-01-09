const fs = require('fs');

function parse(path) {
    const raw = fs.readFileSync(path, 'utf8');
    const split = process.platform === 'win32' ? '\r\n' : '\n';
    let res = []
    const data = raw.trim().split(split)
    data.forEach((line) => {
        let l = line.split('');
        res.push(l);
    })
    return res;
}

module.exports = parse;
