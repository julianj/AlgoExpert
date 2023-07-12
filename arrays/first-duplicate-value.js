function firstDuplicateValue(array) {

    let hashMap = new Map();
    for (let i = 0; i < array.length; i++) {
        if (hashMap.has(array[i])) {
            return array[i];
        }
        hashMap.set(array[i]);
    }
    return -1
}

function firstDuplicateValue2(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[Math.abs(array[i])-1] < 0) {
            return Math.abs(array[i]);
        }
        array[Math.abs(array[i]) - 1] = array[Math.abs(array[i]) - 1] * -1;

    }
    return -1
}

console.log(firstDuplicateValue2([2, 1, 5, 3, 3, 2, 4]));