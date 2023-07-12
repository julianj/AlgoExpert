function moveElementToEnd(array, toMove) {
    let front = 0;
    let back = array.length - 1;
    while (front < back) {
        if (array[back] == toMove) {
            back--;
        } else {
            if (array[front] === toMove) {
                array[front] = array[back];
                array[back] = toMove;
                back--;
            }
            front++;
        }
    }
    return array;
}

console.log(moveElementToEnd([5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12], 5));


// 12 minutes to first solution
// O(n) time | O(n)
function moveElementToEnd1(array, toMove) {
    // Write your code here.
    let answer = [];
    let notMoved = array.reduce((prevVal, currVal) => {
        if (currVal !== toMove) {
            prevVal.push(currVal)
        }
        return prevVal;
    }, []);

    let numberMoved = array.length - notMoved.length;
    return notMoved.concat(Array(numberMoved).fill(toMove))
}

//console.log(moveElementToEnd1([2, 1, 2, 2, 2, 3, 4, 2], 2));
  // Do not edit the line below.
  exports.moveElementToEnd1 = moveElementToEnd1;