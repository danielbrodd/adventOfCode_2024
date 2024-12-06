const parseFile = require('./parseFile')

const filePath = '.\\data.txt'
console.log(filePath)
const {list1,list2} = parseFile(filePath);

function checkOccurence (a,b) {
    let accum = [];
    let cache = new Map();

    for (let subA of a) {
        if (cache.has(subA)){
            accum.push([subA, cache.get(subA)]);
            continue;
        }
        let counter = 0;

        for (let subB of b) {
            if (subA !== subB) continue;
            counter += 1;
        }
        cache.set(subA, counter)
        accum.push([subA,counter]);
    }
    return accum
}

function calcSum(accum) {
    let newAccum = [];
    for (let a of accum) {
        newAccum.push(a[0]*a[1])
    };
    let sum = newAccum.reduce((acc,curr) => acc + curr, 0)

    return sum
}

let testA = [3,4,2,1,3,3]
let testB = [4,3,5,3,9,3]

let testRes = checkOccurence(testA, testB);
console.log(testRes)
let testSum = calcSum(testRes);

console.log('sum: ',testSum)

let sum = calcSum(checkOccurence(list1,list2))

console.log('\n','real sum: ',sum)
