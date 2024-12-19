const fs = require('fs')

function parse(path) {
    const txt = fs.readFileSync(path, 'utf8');
    return arr = txt.trim().split('');
}
module.exports = parse;
