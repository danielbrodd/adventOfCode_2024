const fs = require('fs')
const parse = require('./parse');
const sampleP = './sample.txt';
const sample = parse(sampleP);

const path = './data.txt'
const data = parse(path)

function main(array) {
    console.time('main')
    let data = transformData(array).data
    let res = checkSum(shiftMemory(data))
    console.timeEnd('main')
    return res
}

function checkSum(array) {
    let string = ''
    let checkSum = 0;
    console.time('checkSum')
    for (let index = 0; index < array.length; index++) {
        const file = array[index]
        if (file !== '.') {checkSum += index * Number(file)}
    }
    console.timeEnd('checkSum')
    writeFile('checkSumV_I.txt', string);
    writeFile('checkSum.txt', checkSum)
    return checkSum
}

function shiftMemory(array) {
    console.time('shiftMemory')
    let length = array.length - 1;
    //let j = 0
    for (let i = length; i >= 0; i--) {
        
        if ( array[i] === '.') {
            continue;
        };
        let j = 0
        while (true) {
            if (array[j] === '.') break;
            j++;
        };
        let t = array[j];
        if (i < j) {
            break;
        }
        array[j] = array[i];
        array[i] = t;
    }
    console.timeEnd('shiftMemory')
    return array;
}


function transformData(arr) {
    console.time('transformData')
    let inventory = {}
    let dataArray = [];
    let customIndex = 0;
    arr.forEach((value, index) => {
        let dataStruct = '';
        if (index % 2 === 0) {
            for (let i = 0; i < value; i++) {
                dataArray.push(customIndex) 
            };
            inventory[customIndex] = value
            customIndex++;
        } else {
            for (let i = 0; i < value; i++) {
                dataArray.push('.')
            }
        }
    });
    console.timeEnd('transformData')
    return { data:dataArray, inventory }
}; 
main(data)

function writeFile(path, data) {
    fs.writeFile(path, data.toString(), err => {
        if (err) console.log(err)
        else console.log('wrote')
    })
}
