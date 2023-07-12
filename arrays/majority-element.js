function majorityElement(array) {

    let hash = {};
    array.forEach((v, i, a) => {
        if (Object.hasOwn(hash, v)) {
            hash[v] = ++hash[v];
        } else {
            hash[v] = 1;
        }
    })

    maxElement = Object.keys(hash).reduce((pV, cV) => hash[cV] > hash[pV] ? cV : pV);
    if (hash[maxElement] > (array.length / 2)) {
        return maxElement * 1;
    }
    return -1;
}

function majorityElement2(array) {
    // Write your code here.
    let majorityCount = 1;
    let majorityNumber = array[0];
    let i = 1;
    while (i < array.length) {
        if (majorityCount === 0) {
            majorityNumber = array[i];
            majorityCount = 1;
        } else {
            if (majorityNumber === array[i]) {
                majorityCount++;
            } else {
                majorityCount--;
            }
        }
        i++;

    }
    if (majorityCount > 0) {
        return majorityNumber;
    }
    return -1;
}

console.log(majorityElement2([4, 5, 5]));
console.log(majorityElement2([2]));
console.log(majorityElement2([1, 2, 1]));
