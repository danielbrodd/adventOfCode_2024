const parse = require('./parse')
const path = './data.txt'
const sample = './sample2.txt'
const sampleData = parse(sample)
const data = parse(path)


function main(data) {
    let count = 0;

    for (let l = 0; l < data.length; l++){
        for (let c = 0; c < data[l].length; c++) {
            let matches = [
                [data[l-1]?.[c-1], data[l][c], data[l+1]?.[c+1]].join(''),
                [data[l-1]?.[c+1], data[l][c], data[l+1]?.[c-1]].join(''),
            ]
            if ((matches[0] === 'MAS' || matches[0] === 'SAM') && (matches[1] === 'MAS' || matches[1] === 'SAM')){
                count++
            }
        }
    }
    console.log(count)
}

main(data)
main(sampleData)

