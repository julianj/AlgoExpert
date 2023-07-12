function bubbleSort(array) {
  // Write your code here.
  let didWeSwap = false;
  let lastSortedElement = array.length - 1;
  let i = 0;
  let j = 0;
  let tmp = 0;
  while (i < lastSortedElement) {
    j = i;
    while (j < lastSortedElement) {
      if (array[j] >= array[j + 1]) {
        tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        didWeSwap = true;
      }
      j++;
    }
    if (!didWeSwap) {
      return array;
    } else {
      lastSortedElement--;
      i = 0;
      didWeSwap = false;  
    }
  }

  return array;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
console.log(bubbleSort([2, 1]));
console.log(bubbleSort([10]));
console.log(bubbleSort([1,2,5,7,8,9]));

// Do not edit the line below.
exports.bubbleSort = bubbleSort;