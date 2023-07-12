function insertionSort(array) {

    let sortedListEnd = 0;
    let current = 0;
    let tmp = 0;
    while (sortedListEnd <= array.length) {
        current = sortedListEnd + 1;
        while (current >= 0) {
            if (array[current] < array[current - 1]) {
                tmp = array[current - 1];
                array[current - 1] = array[current];
                array[current] = tmp;
                current--;
            } else {
                break;
            }
        }
        sortedListEnd++;
    }

    return array;
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
console.log(insertionSort([5]));
console.log(insertionSort([5, 2]));

// Do not edit the line below.
exports.insertionSort = insertionSort;