const parseFile = require('./parseFile');
const path = './data.txt'
const data = parseFile(path)
// a set to checkj for i (increase) or d (dcrease) "trend
// see chatgpt

function levelCheck(reports) {
    return reports.map(report => {
        let trend = new Set()

        const isValid = report.every((level,i,arr) => {
            if (i === 0) return true;
            
            let diff = level - arr[i-1];
            let absDiff = Math.abs(diff);

            if (absDiff < 1 || absDiff > 3) return false;

            trend.add(diff > 0 ? 'i' : 'd');

            if (trend.size > 1) return false;
            return true
        });

        return isValid ? 'pass' : 'fail';
    });
}



let res = levelCheck(data).filter(s => s === 'pass').length

console.log(res)
console.log(data[data.length -1])

