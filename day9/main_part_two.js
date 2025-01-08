const fs = require('fs')
const parse = require('./parse');
const sampleP = './sample.txt';
const sample = parse(sampleP);

const path = './data.txt'
const data = parse(path)

function main(array) {
    console.time('main')
    let data = transformData(array)
    data = shiftMemory(data)
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
    let inventory = object.inventory;
    for (let i = length; i >= 0; i) {
        if (array[i] !== '.') {
            let size = inventory[array[i]]
            console.log('size: ',size)
            let memorySlot = findContigousMemory(array, size);
            if (memorySlot !== undefined) {
                console.log('memory slot: ', memorySlot)
                console.log('move block')
                moveBlock(array,i, memorySlot, size)
            }
            i -= size;
        } else i -= 1;
    }
    console.timeEnd('shiftMemory')
    console.log(array)
    return array;
}

function moveBlock(array, from, to, length) {
    let min = from - length;
    for (let i = from; i > min; i--){
        console.log('move single')
        moveSingle(array, i, to);
        to +=1;
    }
}

function moveSingle(array, from, to) {
    let temp = array[to];
    array[to] = array[from]
    array[from] = temp
}
function findContigousMemory(array, size) {
    let i = 0;
    let start;
    let length = 0;
    // find first empty space '.'
    while (i < array.length) {
        if (array[i] === '.'){
            start = i;
            console.log('i:', i, 'start:', start, 'size:', size)
            while (array[i] === '.') {
                console.log('i',i)
                length += 1;
                i++;
                if (length === Number(size)) {
                    console.log('length: ', length)
                    return start;
                }
            }
        }
        length = 0;
        i++;
    }
    return undefined; 
    // count number of contigous '.'s
    // if count === size return start index
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
let obj = transformData(sample)



console.log('data: \n---\n')
console.table(obj.data)
console.log('inventory:\n---\n',obj.inventory)
traverse(obj);
shiftMemory(obj);
function traverse(obj){
    let arr = obj.data;
    let length = arr.length - 1;
    let inv = obj.inventory;
    for (let i = length; i >=0; i) {
        if (arr[i] !== '.') {
            size = inv[arr[i]];
            let j = i;
            let cap = j - size;
            for (j; j > cap; j--) {
            }
            i -= size
        } else i -= 1;
    }
}




//main(sample)

function writeFile(path, data) {
    fs.writeFile(path, data.toString(), err => {
        if (err) console.log(err)
        else console.log('wrote')
    })
}
