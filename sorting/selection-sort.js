function selectionSort(array) {

    let indexOfSmallest = 0;
    let sortedListEnd = 0;
    let size = array.length;
    let swapNeeded = false;
    let tmp = 0;
    let i = 0;

    while (sortedListEnd < size) {
        i = sortedListEnd;
        indexOfSmallest = i;
        while (i < size) {
            if (array[i] < array[indexOfSmallest]) {
                indexOfSmallest = i;
                swapNeeded = true;
            }
            i++;
        }
        if (swapNeeded) {
            [array[sortedListEnd], array[indexOfSmallest]] = [array[indexOfSmallest], array[sortedListEnd]];
        }
        sortedListEnd++;
    }
    return array;
}

console.log(selectionSort([1, 3, 2]));
console.log(selectionSort([-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8]));
console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
console.log(selectionSort([5]));

// Do not edit the line below.
exports.selectionSort = selectionSort;
