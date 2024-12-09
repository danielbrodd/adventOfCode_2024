// MAIN PART ONE

const parse = require('./parse2')

const samplePath = './sampleData.txt'
const path = './data.txt' 
const sampleData = parse(samplePath)
const data = parse(path);

function findMulti(data) {
        let newData = data.map(str => {
        let args = str.slice(4,-1)
        let [a,b] = args.split(',').map(Number);    
        return a * b
    })
    
    return newData.reduce((acc,curr) => acc + curr, 0)
}


let res = findMulti(data);


module.exports = findMulti
