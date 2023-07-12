function sortedInsert(num, threeLargest) {

    if (num > threeLargest[2]) {
        threeLargest[0] = threeLargest[1];
        threeLargest[1] = threeLargest[2];
        threeLargest[2] = num;
    } else if (num > threeLargest[1]) {
        threeLargest[0] = threeLargest[1];
        threeLargest[1] = num;
    } else if (num > threeLargest[0]) {
        threeLargest[0] = num;
    }

}

function findThreeLargestNumbers(array) {

    let threeLargest = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
    console.log(threeLargest);
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= threeLargest[0]) {
            sortedInsert(array[i], threeLargest);
        }
    }

    return threeLargest;
}
  
console.log(findThreeLargestNumbers([141, 541, 541, -7, -17, -27, 18, 541, 8, 541, 7]));
  
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  