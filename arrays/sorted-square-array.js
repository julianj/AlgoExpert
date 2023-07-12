// time O(n) space O(n)
function sortedSquaredArray(array) {

    let start = 0;
    let end = array.length - 1;
    let newArray = [].fill(0, 0, end);
    const sqr = (val => Math.pow(val, 2));
    for (let i = end; i > -1; i--) { // O(n)
        if (Math.abs(array[start]) > Math.abs(array[end])) {
            newArray[i] = sqr(array[start]);    
            start++;
        } else {
            newArray[i] = sqr(array[end]);    
            end--;
        }
    }
    return newArray;
}

console.log(sortedSquaredArray([-9,1,2,3, 5, 8]));



// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;

// time O(n*log(n)) space O(n)
function sortedSquaredArray1(array) {
    // Write your code here.
    return array.map(elem => elem * elem) // O(n)
        .sort((a, b) => a - b); // O(n*log(n))
}

// Do not edit the line below.
exports.sortedSquaredArray1 = sortedSquaredArray1;