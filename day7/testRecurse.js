function check(array, curr, target) {
    if (array.length === 0) {
        return curr === target;
    }
    let next = array[0]
    let rem = array.slice(1)
    
    if (check(rem, curr + next, target)){
        return true
    }

    if (check(rem, curr * next, target)){
        return true
    }

    let conc = Number(String(curr) + String(next))
    if (check(rem, conc, target)) {
        return true
    }
    return false
}

module.exports = check
