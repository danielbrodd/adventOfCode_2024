const parse = require('./parse');
const testPath = './sampleData.txt';
const sample = parse(testPath);

const path = './data.txt'
const data = parse(path);
//console.table(sample);
console.log(main(data))
////console.log(main(sample))

function main(map) {
    console.time()
    let antennae = findAntennae(map);
    let uniqueCoords = new Set()
    // Loop of each frequency in antaennae
    for (const [freq, coords] of Object.entries(antennae)) {
        // Loop over each coordinate Entry
        coords.forEach((from,index) => {

            let coordsClone = [...coords.slice(0,index), ...coords.slice(index+1)] 
            // Loop over each entry *except* the current to findDirection, findAntinode and checks Bounds

            coordsClone.forEach(to => {

                let direction = findDirection(from, to)
                let newCoord = findAntinode(direction);
                if (checkBounds(map, newCoord)){
                    uniqueCoords.add(newCoord.toString()); 
                }
            })
        })
    }
    console.log(uniqueCoords)
    console.timeEnd()
    return uniqueCoords.size
}

function findDirection(from, to) {
    if (
        !Array.isArray(from) || 
        !Array.isArray(to) || 
        from.length !== to.length || 
        from.length !== 2
    ) {
        throw new Error('Must be vectors of length 2');
    };

    return { start: to, direction: to.map((v,i) => v - from[i]) }
};


function findAntinode(dirObj) {
    return dirObj.start.map((v,i) => v + dirObj.direction[i])
}

function checkBounds(map, coord) {
    const H = map.length;
    const W = map[0].length;

    if (coord[0] >= H || coord[0] < 0 || coord[1] >= W  || coord[1] < 0) {
        return false
    } else {
        return true
    }
}

function findAntennae(map) {
    let result = {}
    
    map.forEach((row, rowIndex) => {
        row.forEach((item, colIndex) => {
            if (item !== '.') {

                if(item in result){
                    result[item].push([rowIndex,colIndex])
                } else {
                    result[item] = [[rowIndex,colIndex]]
                }
            }
        })
    })
    return result;
}

let dir = findDirection([3,3], [2,5])
let coord = findAntinode(dir)
let bounds = checkBounds(sample, coord)
let res = findAntennae(sample)

/*
sample[3][0] = '#'
sample[0][3] = '#'
sample[3][3] = '#'
sample[5][1] = '#'
sample[1][5] = '#'
sample[0][5] = '#'
sample[2][1] = '#'
sample[5][5] = '#'
sample[2][2] = '#'
sample[1][4] = '#'
console.table(sample)
*/
