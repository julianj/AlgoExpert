// Given an array A, show the first integer  NOT in the array.
function solution(A) {
    A.sort((a,b) => a-b);
    let i = 0;
    while (A[i] <= 0) {
        i++;
    }
    let j = 1;
    while (j<=1000000) {
        if (A[i] !== j) {
            return j;
        } else {
            i++;
        }
        while (A[i] === A[i - 1]) {
            i++;
        }
        j++;
    }
    return i;
}
console.log(solution([-1, -2, 1, 2, 3]))