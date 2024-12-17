const parse = require('./parse');
const samplePath =  './sample.txt';
const path = './data.txt'

const sample = parse(samplePath);
const data = parse(path);

function traverseMap(map) {
    console.time()
    // Find 'me'
    let directions = [[-1,0],[0,1],[1,0],[0,-1]];
    let dir = 0
    let me = [null, null]
    const w = map[0].length
    const h = map.length
    let visited = new Set()
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] === '^') {
                me[0] = row;
                me[1] = col;
            }
        }
    }
    // start traversal
    while (true) {
        map[me[0]][me[1]] = 'X';
        visited.add(me.toString());
        // set next step to traversal direction (initial is up)
        let [r2,c2] = me.map((num, i) => num + directions[dir][i]);
        // out of bounds check
        if ((r2 < 0 || r2 >= h) || (c2 < 0 || c2 >= w)) {
            break;
        }
        let next = map[r2][c2];
        // if next position is a . (free to go) or X (already visited) move in said direction
        // update map visually, add position to visited set, set me to new position
        if ( next === '.' || next === 'X') {
            map[r2][c2] = '^';
            me = [r2,c2];
        } else if (next === '#'){ 
            // if there is an obstacle
            dir = (dir + 1) % 4;
            
        };
    }
    const rowJoiner = process.platform === 'win32' ? '\r\n' : '\n';

    let txtMap = map.map(row => row.join('')).join(rowJoiner)
    console.log(`traversed ${visited.size} unique positions`)
    console.timeEnd()
}

traverseMap(sample)
traverseMap(data)
