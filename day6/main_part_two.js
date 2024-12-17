const parse = require('./parse');
const samplePath =  './sample.txt';
const path = './data.txt'

const sample = parse(samplePath);
const data = parse(path);

let { visited, visitedUnique, start } = traverseMap(data);
console.log(`visited: ${visited.size}`)
console.log(`visited unique: ${visitedUnique.size}`)

let res = traverseWithObstacle(data, visitedUnique, start)
console.log('res: ', res)
function traverseMap(map, me = findCursor(map)) {

    // Find 'me'
    let directions = [[-1,0],[0,1],[1,0],[0,-1]];
    let direction = 0
    const start = [...me];
    let visited = new Set()
    let visitedUnique = new Set()
    let loopsDetected = 0;

    while (true) {
        const stateKey = `${me[0]}-${me[1]}-dir${direction}`;
        const genericState = `${me[0]}-${me[1]}`
        if (visited.has(stateKey)) {
            return { loop: true }
            break;
        }
        visited.add(stateKey);
        visitedUnique.add(genericState)

        map[me[0]][me[1]] = 'X';
        
        const moveResult = move(map, me, direction);
        
        if (moveResult.state === 'out-of-bounds') {
            break;
        }

        if (moveResult.nextCell === '.' || moveResult.nextCell === 'X') {
            me = moveResult.newPosition;
        } else if (moveResult.nextCell === '#' || moveResult.nextCell === '0') {
            direction = (direction + 1) % 4;
        }

    }

    return { visited, visitedUnique, loopsDetected, start }

}

function traverseWithObstacle(map, path, start) {

    let loops = 0;
    console.log(path.size)
    for (cell of path) {
        const [row,col] = cell.split('-').map(Number);
        if (start[0] === row && start[1] === col){ 
            continue;
        }

        const originalCell = map[row][col];
        map[row][col] = '0';
        const result = traverseMap(map, start);
        if (result.loop === true) {
            loops += 1;
        }
        map[row][col] = originalCell;
    }
    return loops
}

function findCursor(map) {
    let me = [];
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] === '^') {
                me[0] = row;
                me[1] = col;
            }
        }
    }
    return me
}


function move(map, position, direction) {
    const directions = [[-1,0],[0,1],[1,0],[0,-1]];
    const [row,col] = position;
    const [rowDelta, colDelta] = directions[direction];

    const nextRow = row + rowDelta;
    const nextCol = col + colDelta;

    const outOfBounds = 
        nextRow < 0 || nextRow >= map.length || nextCol < 0 || nextCol >= map[0].length;

    if (outOfBounds) {
        return { state:'out-of-bounds' , position, direction };
    };

    const nextCell = map[nextRow][nextCol];

    return {
        state: 'ok',
        nextCell,
        newPosition: [nextRow,nextCol],
        direction
    }
}

