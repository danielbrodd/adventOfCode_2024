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

            if (absDiff < 1 || absDiff > 3 || diff === 0) return false;

            trend.add(diff > 0 ? 'i' : 'd');

            return trend.size <= 1;
        });

        return isValid ? 'pass' : 'fail';
    });
}

const res = levelCheck(data);
console.log(res.filter(r => r === 'pass'))
