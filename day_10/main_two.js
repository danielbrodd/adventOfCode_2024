const parse = require('./parse')
const samplePath = './sample.txt'
const sample = parse(samplePath);

const path = './data.txt'
const data = parse(path)

function main(array) {
    console.time();
    let res = 0;
    let startingPos = findStarts(array);
    startingPos.forEach(start => {
        res += hiThereNeighbor(array, start)
    });
    console.log(res);
    console.timeEnd();
};
function hiThereNeighbor(array,indexArray, res = []) {
    const possibles = [[-1,0],[0,1],[1,0],[0,-1]];
    const outerLength = array.length;
    const innerLength = array[0].length;
    const inputFirst = indexArray[0];
    const inputSecond = indexArray[1];
    if (+array[inputFirst][inputSecond] === 9 ) {
        //console.log('found 9 at: ', indexArray)
        let string = indexArray.toString();
        string += ':'
        string += array[inputFirst][inputSecond]
        res.push(string);
    }

    possibles.forEach(dir => {
        let newDir = indexArray.map((value,index) => value + dir[index]);
        let first = Number(newDir[0]);
        let second = Number(newDir[1]);
        if ((first >= 0 && first < outerLength) && (second >= 0 || second < innerLength)) {
            if (+array[first][second] === +array[indexArray[0]][indexArray[1]] + 1) {
                hiThereNeighbor(array, [first,second], res)
            }
        }
    })
    return res.length};
function findStarts(array) {
    let indices = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (+array[i][j] === 0) indices.push([i,j]);
        }
    }
    return indices;
};

main(data)

