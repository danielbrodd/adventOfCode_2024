const fs = require('fs')
const parse = require('./parse');
const sampleP = './sample.txt';
const sample = parse(sampleP);

const path = './data.txt'
const data = parse(path)

function main(array) {
    console.time('main')
    let data = shiftMemory(transformData(array))
    let res = checkSum(data)
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

function shiftMemory(object) {
    console.time('shiftMemory')
    let array = object.data
    let length = array.length - 1;
    let j = 0
    for (let i = length; i >= 0; i--) {
        let fileId = array[i]
        if ( fileId === '.') {
            continue;
        };
        let size = object.inventory[fileId]

        //findContigousFamily(array, size)
        i -= Number(size);
        console.log('file: ', fileId,' size: ', fileId < 10 ? ` ${size}` : size)
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
