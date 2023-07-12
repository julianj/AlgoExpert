// O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
    // Write your code here.
    if (sequence.length > array.length) {
        return false;
    }
    let tracker = 0;
    let s;
    for (s = 0; s < sequence.length; s++) {
        let idx = tracker;
        for (idx = tracker; idx < array.length; idx++) {
            if (array[idx] === sequence[s]) {
                tracker = idx + 1;
                break;
            }
        }        
        if (tracker <= idx) {
            break;
        }
    }
    return (s >= sequence.length);
  }
  
  console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 23, 6, -1, 8, 10]))
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;

[1, 6, -1, 10]
      
[5, 1, 22, 25, 6, -1, 8, 10]
    
seq = 10
idx = 7;
element = 10
tracker = 8;
