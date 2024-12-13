const fs = require('fs')

function parse (path) {
  const txt = fs.readFileSync(path, 'utf8')
  const lines = txt.split('\n')
  let res = [] 
  lines.forEach(line => {
    res.push(line.split(''))
  })
  res.pop()
  return res;
}

module.exports = parse;
