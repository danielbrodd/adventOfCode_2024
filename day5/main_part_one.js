const parse = require('./parse.js')
const path = './data.txt'
const samplePath = './sampleData.txt'

const data = parse(path)
const sample = parse(samplePath)


function _compare(a,b) {
    const possibleRules = [`${a}|${b}`,`${b}|${a}`];

    if (data.rules.includes(possibleRules[0])){
        return -1;
    } else if (data.rules.includes(possibleRules[1])) {
        return 1;
    }
    return 0;
};

function main(data) {
    let correctSum = 0;
    let correctedSum = 0;

    data.print.forEach(edit => {
        const sorted = edit.slice().sort(_compare);


        if (edit.toString() === sorted.toString()){
            correctSum += sorted[Math.floor(sorted.length / 2)];
        } else {
            correctedSum += sorted[Math.floor(sorted.length / 2)]
        }
    });
    return {
        correctSum,
        correctedSum
    }
}

console.table(main(data))
