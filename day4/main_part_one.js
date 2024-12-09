// Main
const parse = require('./parse')
const samplePath = 'sampleData.txt'
const path = 'data.txt'
const sampleData = parse(samplePath)
const data = parse(path)

console.log(sampleData)
