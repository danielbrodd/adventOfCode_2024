const parse = require('./parse');
const testPath = './sampleData.txt';
const path = './data.txt';
const sample = parse(testPath);
const data = parse(path);


function iterateOverObject(object) {
    let keys = Object.keys(object);
    
    let result = 0;
    keys.forEach(key => {
        keyInt = Number(key)
        console.log(key)
        let res = canFormKey(keyInt, object[key]);
        if (res) result += keyInt
    });
    console.log(result)
};

iterateOverObject(sample)

function canFormKey(key, array) {
    if (array.length === 1) {
        return array[0] === key;
    }

    const last  = array[array.length - 1]
    const remainingArray = array.slice(0,-1);
    // test addition
    if (canFormKey(key - last, remainingArray)) {
        return true
    };
    // test multiplication
    if ((key % last === 0) && canFormKey(key / last, remainingArray)) {
        return true;
    }


    return false
};

//iterateOverObject(data);
