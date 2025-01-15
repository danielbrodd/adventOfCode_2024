const parse = require('./parse');
const sample = parse('sample.txt');
const garden = parse('data.txt')
let processed = process(garden)
const height = garden.length;
const width = garden[0].length

function checkTile(row,col, processed, garden) {
    if(processed[row][col]) return;
    
    processed[row][col] = true;

    let currentSymbol = garden[row][col];

    topBorderPlots = {}; //by row
    bottomBorderPlits = {}; // by row
    leftBorderPlits = {}; // by col
    rightBorderPlits = {}; // by col
    
    walkFrom(row,col);

}

function walkFrom(row,col,garden, currentSymbol) {
    let pointsToWalk = [ [row,col] ];
    let area = 0;
    let borderPlots = {
        top: {},
        bottom: {},
        left: {},
        right: {}
    };
    while (true) {
        const point = pointsToWalk.pop()
        if (point === undefined) { break };
        area ++; 
        const [currRow, currCol] = point;
        checkNeighbor(currRow,currCol, -1, 0, pointsToWalk, borderPlots,garden, currentSymbol);
        checkNeighbor(currRow,currCol, +1, 0, pointsToWalk, borderPlots, garden, currentSymbol);
        checkNeighbor(currRow,currCol, 0, -1, pointsToWalk, borderPlots, garden, currentSymbol);
        checkNeighbor(currRow,currCol, 0, +1, pointsToWalk, borderPlots, garden, currentSymbol);

        console.log('borders: ', borderPlots)
    }
}

function checkNeighbor(baseRow, baseCol, deltaRow, deltaCol, pointsToWalk, borderPlots, garden, currentSymbol) {
    const neighborRow = baseRow + deltaRow;
    const neighborCol = baseCol + deltaCol;
    
    if (neighborRow < 0) { pushToBorderPlots(baseRow, baseCol, "top", borderPlots) }
    if (neighborCol < 0) { pushToBorderPlots(baseRow, baseCol, "left", borderPlots) }

    if (neighborRow == height) { pushToBorderPlots(baseRow, baseCol, "bottom", borderPlots) }
    if (neighborCol == width)  { pushToBorderPlots(baseRow, baseCol, "right", borderPlots) }


}

function pushToBorderPlots(row, col, match, borderPlots) {
    switch (match) {
        case "top":
            if (borderPlots.top[row] == undefined) { borderPlots.top[row] = [] }
            borderPlots.top[row].push(col);
            break;
        case "bottom":
            if (borderPlots.bottom[row] == undefined) { borderPlots.bottom[row] = [] }
            borderPlots.bottom[row].push(col);
            break;
        case "left":
            if (borderPlots.left[col] == undefined) { borderPlots.left[col] = [] };
            borderPlots.left[col].push(row);
            break;
        case "right":
            if (borderPlots.right[col] == undefined) { borderPlots.right[col] = [] }
            borderPlots.right[col].push(row);
            break; 
        default:
            break;
    }
}

function process(array) {
    let processed = [];
    for (const line of array) {
        const doneLine = [];
        processed.push(doneLine);
        for (const tile of line) {
            doneLine.push(false);
        }
    }
    return processed;
};

checkTile(0,0, processed, garden)
checkTile(1,4, processed, garden)
