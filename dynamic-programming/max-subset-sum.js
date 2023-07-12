/* 
Write a function that takes in an array of positive integers and returns the 
maximum sum of non - adjacent elements in the array.
If the input array is empty, the function should return 0.

Sample Input
array = [75, 105, 120, 75, 90, 135]

Sample Output
330 // 75 + 120 + 135

*/

function maxSubsetSumNoAdjacent(array) {
    if (array.length === 0) {
        return 0;
    }

    if (array.length === 1) {
        return array[0];
    }

    if (array.length === 2) {
        return Math.max(array[0], array[1]);
    }

    let l = array.length;
    return Math.max(
        array[l - 1] + maxSubsetSumNoAdjacent(array.slice(0,l - 2)),
        array[l - 2] + maxSubsetSumNoAdjacent(array.slice(0,l - 3))
    );
}
console.log(maxSubsetSumNoAdjacent([1, 2]));
console.log(maxSubsetSumNoAdjacent([1, 2, 3]));
console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));
console.log(maxSubsetSumNoAdjacent([1, 15, 3]));
console.log(maxSubsetSumNoAdjacent([10, 5, 20, 25, 15, 5, 5, 15, 3, 15, 5, 5, 15]));

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
