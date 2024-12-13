const parse = require('./parse');
const samplePath =  './sample.txt';

const sample = parse(samplePath);

function traverseMap(map) {

  let directions = [[1,0],[0,1],[-1,0],[0,-1]];
  let dir = 0
  let me = [null, null]
  const w = map[0].length
  const h = map.length
  let visited = []
  console.log('w: ', w, 'h: ',h)
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      if (map[row][col] === '^') {
        me[0] = row;
        me[1] = col;
        visited.push([row,col])
      }
    }
  }
  console.log(me)
  while (true) {

    let [r2,c2] = me.map((num, i) => num + directions[dir][i])
    if (map[r2][c2] === '.') {
      map[me[0]][me[1]] = 'X'
      me = [r2,c2]

    }
    if((me.c < 0 || me.c > h) || (me.r < 0 || me.r > w)) {
      break;
    }
  }
}

traverseMap(sample)
