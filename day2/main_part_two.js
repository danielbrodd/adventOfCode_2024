const fp = require('./parseFile')
const path = './data.txt';

const data = fp(path);


function levelCheck(reports) {
    return reports.map(report => {

        let isValid = _levelCheck(report);

        if (!isValid.status){
            let cycle = report.length
            for (let i = 0; i < cycle; i++) {
                let tempArray = [...report.slice(0,i), ...report.slice(i+1)];
                let tempRes = _levelCheck(tempArray);
                
                if (tempRes.status) return tempRes
            }
        }
        return isValid
    })}


function _levelCheck(array) {
    let trend = new Set();
    let status = { status: true, index: null }
    array.every((level, i, arr) => {
        if (i === 0) return true;

        let diff = level - arr[i-1];
        let absDiff = Math.abs(diff);

        if (absDiff < 1 || absDiff > 3) {
            status.status = false;
            status.index = i;

            return false
        }
        trend.add(diff < 0 ? 'd' : 'i')
        if (trend.size > 1) {
            status.status = false;
            status.index = i;
            return false
        }

        return true;
    });
    return status
}

let testData = [[2,3,4,5],[2,10,11,12], [22,21,23,24],[44,45,43,42,41], [2,10,16,17], [1,2,3,7],[71, 69, 70, 71, 72, 75]]

let testRes = levelCheck(testData)
console.log(testRes)

 let res = levelCheck(data).map(x => x.status ? 'pass' : 'fail')

let pass = res.filter(x => x === 'pass').length
let fail = res.filter(x => x === 'fail').length
console.log(res)
console.log('pass: ', pass)
console.log('fail: ', fail)
//console.log(res.map(r => r.status).filter(x => x === true).length)

//console.log(res.filter(x => x === 'pass').length)
