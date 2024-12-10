// Main
const parse = require('./parse')
const samplePath = 'sampleData.txt'
const path = 'data.txt'
const sampleData = parse(samplePath)
const data = parse(path)


function Main(data) {
    let count = 0    
    for (let l = 0; l < data.length; l++){
        for (let c = 0; c < data[l].length; c++) {
            let matches = [
                [data[l][c],data[l][c+1],data[l][c+2],data[l][c+3]].join(''),
                [data[l][c],data[l+1]?.[c],data[l+2]?.[c],data[l+3]?.[c]].join(''),
                [data[l][c],data[l+1]?.[c+1],data[l+2]?.[c+2],data[l+3]?.[c+3]].join(''),
                [data[l][c],data[l+1]?.[c-1],data[l+2]?.[c-2],data[l+3]?.[c-3]].join(''),
            ]
            for (match of matches) {
                console.log(match)
                if (match === 'XMAS' || match === 'SAMX') count++
            }
            
        }
        }
    console.log(count)
    }



Main(sampleData)
Main(data)
