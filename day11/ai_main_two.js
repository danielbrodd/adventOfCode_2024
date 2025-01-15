function manageStones(stone) {
    let results = [];

    if (+stone === 0) {
        results.push('1');
    } else if (stone.length % 2 === 0) {
        let [a, b] = splitString(stone);
        results.push(a, b);
    } else {
        results.push(String(+stone * 2024));
    }

    return results;
}

function splitString(string) {
    let halfWayPoint = string.length / 2;
    let a = string.slice(0,halfWayPoint);
    let b = string.slice(halfWayPoint);
    a = +a
    b = +b
    a = a.toString()
    b = b.toString()
    return [a,b]
}

function precomputeTransforms(stones) {
    const transformations = {};

    for (const stone of stones) {
        if (!transformations[stone]) {
            transformations[stone] = manageStones(stone);
        }
    }

    return transformations;
}

function iterate(initialStones, times) {
    console.time();
    let currentDict = { ...initialStones }; // Copy initial state

    // Precompute transformations for all unique stones
    const transformations = precomputeTransforms(Object.keys(initialStones));

    for (let i = 0; i < times; i++) {
        let newDict = {};

        for (const stone in currentDict) {
            const count = currentDict[stone];

            const children = transformations[stone];
            for (const child of children) {
                if (!newDict[child]) newDict[child] = 0;
                newDict[child] += count;
            }
        }

        currentDict = newDict; // Move to next state
    }

    // Calculate total stones
    const totalStones = Object.values(currentDict).reduce((a, b) => a + b, 0);

    console.timeEnd();
    return totalStones;
}

// Example usage:
const initialStones = { "101": 2, "0": 1 };
console.log("Total stones:", iterate(initialStones, 5));

