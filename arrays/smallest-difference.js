// O(n*log(n) + m*log(m)) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    const distance = (a, b) => {
        if (((a < 0) && (b < 0)) || ((a > 0) && (b > 0))) {
            return Math.abs(a - b);
        }
        return (Math.abs(a) + Math.abs(b));
    }
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let smallestDiff = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
    let i = 0;
    let j = 0;
    while ((i < arrayOne.length) && (j < arrayTwo.length)) {
        if (distance(arrayOne[i], arrayTwo[j]) === 0) {
            return [arrayOne[i], arrayTwo[j]];
        } else if (distance(arrayOne[i], arrayTwo[j]) <= distance(smallestDiff[0], smallestDiff[1])) {
            smallestDiff = [arrayOne[i], arrayTwo[j]];
        }
        if (arrayOne[i] < arrayTwo[j]) {
            i++;
        } else {
            j++;
        }
    }
    return smallestDiff;
}

console.log(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]))




// 30 minutes to get a working solution
// O(n^2)
function smallestDifference1(arrayOne, arrayTwo) {
    // Write your code here.
    let smallestDiff = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    const distance = (a, b) => {
        if (((a < 0) && (b < 0)) || ((a > 0) && (b > 0))) {
            return Math.abs(a - b);
        }
        return (Math.abs(a) + Math.abs(b));
    }
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            if (distance(arrayOne[i], arrayTwo[j]) < distance(smallestDiff[0], smallestDiff[1])) {
                smallestDiff[0] = arrayOne[i];
                smallestDiff[1] = arrayTwo[j];
            }
        }
    }

    return smallestDiff;
}

//console.log(smallestDifference1([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))

// Do not edit the line below.
exports.smallestDifference1 = smallestDifference1;
