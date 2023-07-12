// Not from Algoexpert. 
// Sample interview coding question for AvalonBay


function one(array) {
    let sortedArray = array.slice().sort((a, b) => b - a);    
    let outputArray = [];
    for (let i = 0; i < array.length; i++) {
        outputArray.push(array.indexOf(sortedArray[i]));
    }
    return outputArray;
}

function two(array) {
    return [...array].sort((a, b) => b - a).map((item) => array.indexOf(item));
}

const array = [3, 1, 2];

console.log(array);
console.log(one(array));
console.log(two(array));
