
function binarySearch(array, target, start = -1, end = -1) {
    if (start > end) {
        return -1;
    }
    if (array.length === 1) {
        if (array[0] === target) {
            return 0;
        } else {
            return -1;
        }           
    }

    let half = Math.floor(array.length / 2);     
    if ((start !== -1) && (end !== -1)) {
        half = Math.floor((start + (end - start) / 2)); 
    }
    
    if (array[half] === target) {
        return half;
    }
    if (array[half] > target) {
        return binarySearch(array, target, start, half-1)
    } else {
        return binarySearch(array, target, half+1, array.length-1);
    }
}
  
  // Do not edit the line below.
exports.binarySearch = binarySearch;
  
console.log(binarySearch([1, 5, 23, 111], 35));
  