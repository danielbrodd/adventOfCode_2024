const fp = require('./parseFile')
const path = './data.txt';

const data = fp(path);


function levelCheck(reports) {
  return reports.map(report => {

    let isValid = _levelCheck(report);

    if (isValid.status === false) {
      let newArray = [...report.slice(0, isValid.index), ...report.slice(isValid.index + 1)]
      let safetyBuffer = _levelCheck(newArray)
      return safetyBuffer.status ? 'pass' : 'fail'
    };
    return isValid.status ? 'pass' : 'fail';
  });
}


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

let res = levelCheck(data)

console.log(res.filter(x => x === 'pass').length)
