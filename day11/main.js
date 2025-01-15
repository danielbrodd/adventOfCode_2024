const parse = require('./parse')
const sample = parse('./sample.txt')
const data = parse('./data.txt')
function manageStones(array) {
    let index = 0;

    while (index < array.length){
        let stone = array[index];
        if (+stone === 0) {
        array[index] = '1';
        } else if(stone.length % 2 === 0) {
            let [a,b] = splitString(stone);
            
            array[index] = a;
            array.splice(index+1,0, b);
            index += 1;
        } else {
            array[index] = String(+stone * 2024);
        }
        index += 1;
    }
    return array
}

function splitString(string) {
    let halfWayPoint = string.length / 2;
    let a = string.slice(0,halfWayPoint);
    let b = string.slice(halfWayPoint);
    a = +a
    b = +b
    a = a.toString()
    b = b.toString()
    return [a,b]
}


function iterate(array, times) {
    console.time()
   for (let i = 0; i < times; i++) {
        manageStones(array)
    }
    console.timeEnd()
    return array.length
};

console.log(iterate(data, 25))
