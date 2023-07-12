function mergeTwoIntervals(interval1, interval2) {
    // [1,3] [6,10]  [1, 10]
    // [43,49] [12,54] [12,54]
    if (interval1[0] <= interval2[0]) {
        if (interval1[1] >= interval2[0]) {
            return [interval1[0], Math.max(interval1[1], interval2[1])];
        }
    }

    if (interval2[0] <= interval1[0]) {
        if (interval2[1] >= interval1[0]) {
            return [interval2[0], Math.max(interval1[1], interval2[1])];
        }
    }

    return false;
}


function mergeOverlappingIntervals(array) {

    let i = 0;
    let j = 0;
    let mergedInterval;
    while (i < array.length) {
        j = i + 1;
        while (j < array.length) {
            mergedInterval = mergeTwoIntervals(array[i], array[j]);
            if (mergedInterval === false) {
                j++;
            } else {
                array[i] = mergedInterval;
                array.splice(j, 1);
                j = i + 1;
            }
        }
        i++;
    }
    return array;
}

console.log(mergeOverlappingIntervals([
    [0,0],
    [0,0],
    [0,0]
]))
console.log(mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
]));

console.log(mergeOverlappingIntervals([
    [43, 49],
    [9, 12],
    [12, 54],
    [45, 90],
    [91, 93]
]))