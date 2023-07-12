//O(n*m) time | O(n*m) space
function spiralTraverse(array) {
    // Write your code here.
    let spiral = [];
    let maxRow = array.length - 1;
    let maxCol = array[0].length - 1;

    let minCol = 0;
    let minRow = 0;
    const spiralEstimatedSize = (maxRow + 1) * (maxCol + 1);
    const done = () => (spiral.length >= spiralEstimatedSize);

    let c;
    let r;
    while (!done()) {
        c = minCol;
        while (c <= maxCol && !done()) {
            spiral.push(array[minRow][c]);
            c++;
        };
        minRow++;

        r = minRow;
        while (r <= maxRow && !done()) {
            spiral.push(array[r][maxCol]);
            r++;
        };
        maxCol--;

        c = maxCol;
        while (c >= minCol && !done() ) {
            spiral.push(array[maxRow][c]);
            c--;
        };
        maxRow--;

        r = maxRow;
        while (r >= minRow && !done()) {
            spiral.push(array[r][minCol]);
            r--;
        };
        minCol++;
    }
    return spiral;
}

let array1 = [
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6]
];

let array2 = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
];

let array8 = [
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6]
];

console.log(spiralTraverse(array8));
// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
