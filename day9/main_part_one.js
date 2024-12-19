const parse = require('./parse');
const sampleP = './sample.txt';
const sample = parse(sampleP);

console.log(sample);


function sortData(arr) {
    let dataStruct = '';
    let customIndex = 0;
    arr.forEach((value, index) => {
        if (index % 2 === 0) {
            dataStruct += customIndex.toString().repeat(value);
            customIndex++;
        } else {
            dataStruct += '.'.repeat(value);
        }
    });
    return dataStruct.split('')
}

console.log(sortData(sample))
