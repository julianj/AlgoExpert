function zeroSumSubarray(nums) {

    let subArraySum;
    for (let i = 0; i < nums.length; i++) {
        subArraySum = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            if (subArraySum === 0) {
                return true;
            }
            subArraySum += nums[j];
        }
        if (subArraySum === 0) {
            return true;
        }
    }

    return false;

}

console.log(zeroSumSubarray([2, -2]));
console.log(zeroSumSubarray([1, 2, -2, 3]));
