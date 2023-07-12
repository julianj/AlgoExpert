// O(n*log(n)) time | O(1) space
// A clever one.
function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b); // sort ascending numerically O(n*log(n))
    let maxChangeConstructed = 0;
    for (i = 0; i < coins.length; i++) {
        if (coins[i] > maxChangeConstructed + 1) {
            console.log(`maxChangeConstructed+1=${maxChangeConstructed + 1}`);
            return maxChangeConstructed + 1;
        } else {
            maxChangeConstructed += coins[i];
            console.log(`maxChangeConstructed=${maxChangeConstructed}`);
        }
    }
    console.log(`*maxChangeConstructed+1=${maxChangeConstructed + 1}`);
    return maxChangeConstructed + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));

/* coins=[5, 7, 1, 1, 2, 3, 22]
sorted coins=[1, 1, 2, 3, 5, 7, 22]

[]  => 1
[1] => 2
[1, 1]   => 3
[1, 1, 1] => 4
[1, 2] => 4
[1, 2, 3] => 7
[1, 2, 3, 4] => 11

[1, 2, 4] => 8
7,6,4
    
[1, 2, 5] => 9
8,7,4
 */

const MAX_CHANGE = 100;

function nonConstructibleChange1(coins) {
    // Write your code here.
    coins.sort((a, b) => a - b);
    const maxChange = coins.reduce((prevVal, currVal) => prevVal + currVal, 0);
    console.log(coins, maxChange);
    [currVal, currIdx] = coins.reduce((prevVal, currVal, currIdx) => {
        if ((maxChange - currVal) < currVal) {
            console.log(`currVal:${currVal} currIdx:${currIdx}`);
            return [currVal, currIdx];
        }
    });
    console.log(`currVal:${currVal} currIdx:${currIdx} maxChange:${maxChange}`);
    console.log(`I need to look between ${coins[currIdx - 1]} and ${coins[currIdx]}`);
}

//console.log(nonConstructibleChange1([5, 7, 1, 1, 2, 3, 22]));
// Do not edit the line below.
exports.nonConstructibleChange1 = nonConstructibleChange1;
