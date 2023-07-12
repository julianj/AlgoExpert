// O(n^2) time | O(n)
function threeNumberSum(array, targetSum) {
    // Write your code here.
    let thirdOne;
    let sum;
    let triplets = [];
    let left = 0;
    let right = array.length - 1;
    array.sort((a, b) => a - b);
    while (left < right) {
        sum = array[left] + array[right];
        if (sum <= (targetSum+1)) {
            thirdOne = targetSum - sum;
            array.slice(left + 1, right)
                .filter(value => value == thirdOne)
                .forEach(value1 => {
                    triplets.push(
                        [array[left], array[right], value1].sort((a, b) => a - b)
                    );
                });
            if (right <= left + 1) {
                left++;
                right = array.length - 1;
            } else {
                right--;
            }
        } else {
            right--;
        }
    }
    return triplets.sort((a, b) => {
        if (a[0] === b[0]) {
            if (a[1] === b[1]) {
                return (a[2] - b[2]);
            }
            return (a[1] - b[1])
        }
        return (a[0] - b[0]);
    }
    );
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0))
console.log(threeNumberSum([1, 2, 3], 6))
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
