// Main
const parse = require('./parse')
const samplePath = 'sampleData.txt'
const path = 'data.txt'
const sampleData = parse(samplePath)
const data = parse(path)

console.log(sampleData)

function Main(data) {
    for (let row of data){
        row.forEach((char, i) => {
            if (char === 'x' || char === 'm'){
                console.log(char, i)
            }
        })
        }
    }

function horizontalForward(row){
}

function horizontalBackward(row){}
function verticalDown(twoDArray){}
function verticalUp(twoDArray){}
function diagonaDownRight(twoDArray){}
function diagonaDownLeft(twoDArray){}
function diagonaUpRight(twoDArray){}
function diagonaUpLeft(twoDArray){}


Main(sampleData)
