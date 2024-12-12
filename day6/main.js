const parse = require('./parse');
const samplePath =  './sample.txt';

const sample = parse(samplePath);

function traverseMap(map) {

  let dir = [[1,0],[0,1],[-1,0],[0,-1]];
  let me = {r: 0, c: 0};
  const w = map[0].length
  const h = map.length
  console.log('w: ', w, 'h: ',h)
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      if (map[row][col] === '^') {
        me.r = row;
        me.c = col;
        console.log(me)
      }
    }
  }
  while (true) {
    
    if((me.c < 0 || me.c > h) || (me.r < 0 || me.r > w)) {
      break;
    }
  }
}

traverseMap(sample)
