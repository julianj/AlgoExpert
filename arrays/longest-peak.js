function longestPeak(array) {

    if (array.length < 2) {
        return 0;
    }
    let currentLongestPeak = 0;
    let currentCount = 1;
    let direction = '';
    let i = 1;
    while (i < array.length) {
        if (direction === '') {
            if (array[i] > array[i - 1]) {
                direction = 'up';
                currentCount++
            } else {
                currentCount = 1;
            }
        } else if (direction === 'up') {
            if (array[i] > array[i - 1]) {
                currentCount++;
            } else if (array[i] < array[i - 1]) {
                direction = 'down';
                currentCount++;
                if (currentCount > currentLongestPeak) {
                    currentLongestPeak = currentCount;
                }
            } else {
                direction = '';
                currentCount = 1;
            }
        } else { //down
            if (array[i] < array[i - 1]) {
                currentCount++;
                if (currentCount > currentLongestPeak) {
                    currentLongestPeak = currentCount;
                }
            } else if (array[i] > array[i - 1]) {
                currentCount = 2;
                direction = 'up';
            } else {
                currentCount = 1;
                direction = '';
            }
        }
        i++;
    }

    return (currentLongestPeak > 2) ? currentLongestPeak : 0;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
console.log(longestPeak([1, 3, 2]));
console.log(longestPeak([5, 4, 3, 2, 1, 2, 1]));
console.log(longestPeak([5, 4, 3, 2, 1, 2, 10, 12]))