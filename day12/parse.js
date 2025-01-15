const fs = require('fs')

function parse(path)  {
    const raw = fs.readFileSync(path, 'utf8');
    const split = process.platform === 'win32' ? '\r\n' : '\n';
    const data = raw.trim().split(split)
    let res = [];
    for (item of data) {
        const temp = item.trim().split('')
        res.push(temp)
    }
    return res
}

module.exports = parse;
