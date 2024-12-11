const fs = require('fs')

function parse(path) {
    const lines = fs.readFileSync(path, 'utf8')
    const partition = lines.split('\r\n\r\n')
    const rules = partition[0].split('\r\n')
    const print = partition[1].split('\r\n')
    const printOrder = []
    for (let p of print) {
        let temp = p.split(',').map(Number)
        printOrder.push(temp)
    }
    printOrder.pop()

    return {'rules': rules, 'print': printOrder}
}

module.exports = parse;
