// O(n) time | O(1) space
function isMonotonic1(array) {
    // Write your code here.
    if (array.length <= 1) {
        return true;
    }
    let head = 1;
    let tail = 0;
    let type = 'eq';
    while (type == 'eq' && head < array.length) {
        if (array[head] > array[tail]) {
            type = 'asc';
        } else if (array[head] < array[tail]) {
            type = 'desc';
        } else {
            head++;
            tail++    
        }
    }
    if (type == 'eq') {
        return true;
    }
    let monotonic = true;
    while (head < array.length && monotonic) {
        if (type === 'asc') {
            monotonic = array[head] >= array[tail];
        } else if (type === 'desc') {
            monotonic = array[head] <= array[tail];
        }
        head++;
        tail++;
    }
    return monotonic;
}

// clever one
function isMonotonic(array) {
    // Write your code here.
    let isNonDecreasing = true;
    let isNonIncreasing = true;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]) {
            isNonDecreasing = false;
        } else if (array[i] > array[i + 1]) {
            isNonIncreasing = false;
        }
    }
    return (isNonDecreasing || isNonIncreasing)
}


console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
if (isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])) {
    console.log('yes');
} else {
    console.log('no');
}


// Do not edit the line below.
exports.isMonotonic = isMonotonic;
