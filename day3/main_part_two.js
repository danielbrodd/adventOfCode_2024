const parse = require('./parse')
const path = './data.txt'
const findMulti = require('./main_part_one')
const data = parse(path)



let res = findMulti(data)

console.log(res)
