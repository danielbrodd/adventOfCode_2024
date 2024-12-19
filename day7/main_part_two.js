
const parse = require('./parse');
const check = require('./testRecurse.js')
const testPath = './sampleData.txt';
const path = './data.txt';
const sample = parse(testPath);
const data = parse(path);


function iterateOverObject(object) {
    let keys = Object.keys(object);
    
    let result = 0;
    keys.forEach(key => {
        keyInt = Number(key)
        console.log('Key: ', key, '\nArray: ', object[key])
        let res = check(object[key], 0, keyInt);
        if (res) result += keyInt
        if (res) console.log('true: ',key, object[key])
    });
    console.log(result)
};

iterateOverObject(data)

