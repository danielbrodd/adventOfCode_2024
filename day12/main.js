const parse = require('./parse');
const sample = parse('sample.txt');
const data = parse('data.txt')

finale(data);
function finale(array) {
    console.time()
    let result = onAll(array);
    let sum = 0;
    for (let [key, value] of Object.entries(result)) {
        sum += value.area * value.perimiter;
    }
    console.log(sum)
    console.timeEnd()
}
function onAll (array) {
    let visited = new Set();
    let result = {}
    for (let col = 0; col < array.length; col++) {
        for (let row = 0; row < array[0].length; row++) {
            let coord = [col,row]
            let key = coord.toString();
            if (visited.has(key)) { continue };
            result[key] = checkTile(coord,array);
            let vCoord = result[key].visitedArray;
            vCoord.forEach(vC => {
               visited.add(vC.toString())
            })
        }
    }
    return result
}
function checkTile(coord, array, perimiter = 0, area = 0, visited = new Set(), visitedArray = []) {
    let directions = [[-1,0],[0,1],[1,0],[0,-1]];

    const key = coord.toString();
    if (visited.has(key)) { return { perimiter, area, visitedArray } };
    visited.add(key);
    visitedArray.push(coord)

    area++;
    const [col, row] = coord;
    let curr = array[col][row];
     
    for (let i = 0; i < directions.length; i++) {
        const [deltaCol, deltaRow] = directions[i];
        const newCol = col + deltaCol;
        const newRow = row + deltaRow;

        if (newCol < 0 ||
            newRow < 0 ||
            newCol >= array.length ||
            newRow >= array[0].length) {
            perimiter += 1;
            continue;
        }
        const next = array[newCol][newRow];
        if (next === curr) {
        ({ perimiter, area, visitedArray } = checkTile([newCol,newRow], array, perimiter, area, visited, visitedArray));
        } else {
            perimiter++;
        }
    
    }
    //console.log(visitedArray)
    return { perimiter, area, visitedArray }
};
//console.log(sample);
//console.log(onAll(sample));
//let res = checkTile([0,0],sample)
//console.log(res.visitedArray)
//finale(sample)
