const parse = require('./parse')
const sample = parse('./sample.txt')
let data = parse('./data.txt')
function transformData(array) {
    let dict = {};
    array.forEach(val =>{
        if (dict[val] === undefined) {dict[val] = 0;}
        dict[val] += 1;
   })
    return dict;
} 
let globalMemory = {}
data = transformData(data)

function doAlln(obj,n, memory) {
    console.time()
    let currStones = obj;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        currStones = doAll(currStones)
    }
    for (let val of Object.values(currStones)) {
        sum += val
    }
    console.log(sum)
    console.timeEnd()
}
doAlln(data,15, globalMemory)
function doAll(obj) {
    let memory = {};
    let res = {};
    let sum = 0
    for (let stone of Object.keys(obj)) {
        if (memory[stone] === undefined) {
            memory[stone] = memoization(stone)[stone];
        }
    }
    for (let [stone, children] of Object.entries(memory)) {
        //console.log('stone: ', stone)
        for (child of children)  {
            //console.log('child: ', child)
            if (res[child] === undefined) {res[child] = 0}
            res[child] += obj[stone];
        }
    }
    return res
}
function smartBlink(objEntry) {
    let [ key, value ] = objEntry;
    let returnRes = []
    let res = _blink(key)
    for (let i = 0; i < value; i++) {
        returnRes = [...returnRes, ...res] 
    }
    return returnRes
}

function memoization(objEntry, memory = {}) {
    let stone = objEntry
    let stones = [stone]
    for (let i = 0; i < 5; i++) {
        stones = _blink(stones); 
        memory[stone] = stones
    }
    
    memory[stone] = stones;
    return memory
}




// Helper functions
function _blink(stones) {
    let result = [];
    while (true) {
        let stone = stones.shift();
        if (stone === undefined) {break};
        if (+stone === 0) {
            result.push('1')
        } else if(stone.length % 2 === 0) {
            let [a,b] = _splitString(stone);
            result.push(a,b)
        } else {
            result.push(String(+stone * 2024));
        }
    }
    return result
}

function _splitString(string) {
    let halfWayPoint = string.length / 2;
    let a = string.slice(0,halfWayPoint);
    let b = string.slice(halfWayPoint);
    a = +a
    b = +b
    a = a.toString()
    b = b.toString()
    return [a,b]
}

