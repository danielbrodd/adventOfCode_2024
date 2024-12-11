let a = {}

function appAdd(obj, key, val, dir) {
    if (!obj.hasOwnProperty(key)) {
        obj[key] = {'before':new Set(), 'after':new Set()};
    }
    if (dir === 'b') {
        obj[key]['before'].add(val)
    } else if (dir === 'a') {
        obj[key]['after'].add(val)
    }
}

appAdd(a,65,77, 'b')
appAdd(a,65,12, 'b')
appAdd(a,12,37,'b')


console.log(a)
console.log(a['65']['before'].has(13))
