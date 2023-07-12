function missingNumbers(nums) {
   
    nums.sort((a,b) => (a-b));
    let output = [];
    let offset = 1;
    let i = 0;
    if (nums.length <= 0) {
        return output;
    }
    while (i < nums.length) {
        if (nums[i] !== (i + offset)) {
            output.push(i + offset);
            offset++;
        } else {
            i++;
        }
    }
    while (offset <= 2) {
        output.push(i + offset);
        offset++;
    }
    return output;
}
console.log(missingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22]))
console.log(missingNumbers([1,4,3]))