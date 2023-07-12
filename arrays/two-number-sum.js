// O(n*log(n)) time | O(1) space 
function twoNumberSum(array, targetSum) {
    let left = 0;
    let right = array.length - 1;
    console.log(array);
    array.sort((a,b) => a - b);
    console.log(array);
    while (left < right) {
        let sum = (array[left] + array[right]);
        if (sum === targetSum) {
            return [array[left], array[right]];
        }
        if (sum < targetSum) {
            left++;
        } else {
            right--;
        }
    }
    return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));


// O(n) time / O(n) space 
function twoNumberSum3(array, targetSum) {
    let cache = new Set(); // O(1) access
    for (let num of array) {
      const complement = targetSum - num; // num + complement = targetSum
      if (cache.has(complement)) {
          return [num, complement]
      }
      cache.add(num); // might be the complement of a future num
    }
    return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum3 = twoNumberSum3;

  // O(n^2) time / O(1) space
function twoNumberSum2(array, targetSum) {

    let result = [];
    array.find((elem, idx) => { // O(n^2)
        return array.find((elem2, idx2) => {
            if ((idx !== idx2) && ((elem + elem2) === targetSum)) {
                result = [elem, elem2];
                return true;
            }
        })
    })

    return result;
    // Write your code here.
}

// Do not edit the line below.
exports.twoNumberSum2 = twoNumberSum2;

// O(n^2) time / O(1) space
function twoNumberSum1(array, targetSum) {

    let result = [];
    array.forEach(elem => {
        array.forEach(elem2 => {
            if ((elem + elem2) === targetSum) {
                result = [elem, elem2];
            }
        })
    });

    console.log(result);
    return result;
    // Write your code here.
}

// Do not edit the line below.
exports.twoNumberSum1 = twoNumberSum1;
