/*
Difficulty: Medium 
Category: Dynamic Programming
Number Of Ways To Make Change 

Given an array of distinct positive integers representing coin denominations and 
a single non-negative integer n representing a target amount of money, 
write a function that returns the number of ways to make change for that target amount 
using the given coin denominations.

Note that an unlimited amount of coins is at your disposal.

- Sample Input:
n = 6
denoms = [1, 5]

- Sample Output
2 // 1x1 + 1x5 and 6x1

*/

 function numberOfWaysToMakeChange(n, denoms) {
    // Here we'll store the number of ways we can make change for each amount up to n
    let waysToMakeChange = Array(n + 1).fill(0);
    waysToMakeChange[0] = 1; // There's always ONE way to make change for 0
    denoms.forEach(denom => {
        for (let amount = 1; amount <= n; amount++) {
            if (denom <= amount) {
                waysToMakeChange[amount] += waysToMakeChange[amount - denom];            
            }
        }
    });
    return waysToMakeChange[n];
}


console.log(numberOfWaysToMakeChange(6, [1]));
console.log(numberOfWaysToMakeChange(6, [1, 5]));
console.log(numberOfWaysToMakeChange(0, [2, 3, 4, 7]));
console.log(numberOfWaysToMakeChange(4, [1,5,10,25]));
console.log(numberOfWaysToMakeChange(5, [1, 5, 10, 25]));
console.log(numberOfWaysToMakeChange(10, [1,5,10,25]));

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
