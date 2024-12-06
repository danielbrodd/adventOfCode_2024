//function randomArray(n) {
//    return Array.from({length: n}, () => Math.floor(Math.random() * 9) + 1);
//    
//}
//
//let a = randomArray(10);
//let b = randomArray(10);

//console.log(a.sort((a,b)=>a-b));
//console.log(b.sort((a,b)=>a-b));
const parseFile = require('./parseFile')

const filePath = '.\\data.txt'
console.log(filePath)
const {list1,list2} = parseFile(filePath);

function pairUp(a,b) {
    let aSort = a.sort((a,b)=> a-b);
    let bSort = b.sort((a,b)=> a-b);

    let length = a.length > b.length ? a.length : b.length
    let listOfPairs = [];
        
    for (let i=0; i < length; i++) {
        let t = [];
        t.push(a.shift())
        t.push(b.shift())
        listOfPairs.push(t)
    }
    return listOfPairs
};

function calcDistance(a) {
    let distance = [];
    for (subA of a) {
        distance.push(Math.abs(subA[0] - subA[1]))
    }
    return distance;
};

let res = pairUp(list1,list2)

res = calcDistance(res);

let max = Math.max(...res)
let min = Math.min(...res)

let aggRes = res.reduce((agg,curr) => agg +  curr, 0)
console.log(aggRes)
//let res = pairUp(a,b);
//res = calcDistance(res);
//console.table(res)
//
//let aggRes = res.reduce((acc,curr => acc + curr, 0);
//
//console.log(aggRes)
