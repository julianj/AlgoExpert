function transposeMatrixSquare(matrix) {
    // Flipped version of the original matrix across its main diagonal (top-left to bottom-right)
    const rows = matrix.length;
    const cols = matrix[0].length;
    let tmp;

    for (let r = 0; r < rows; r++) {
        for (let c = r; c < cols; c++) {
            if (r !== c) {
                tmp = matrix[c][r];
                matrix[c][r] = matrix[r][c];
                matrix[r][c] = tmp;
            }
        }
    }

    return matrix;
}

function transposeMatrix1(matrix) {
    // Flipped version of the original matrix across its main diagonal (top-left to bottom-right)
    const rows = matrix.length;
    const cols = matrix[0].length;
    let outMatrix = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (outMatrix[c] === undefined) {
                outMatrix[c] = []
            }
            outMatrix[c].push(matrix[r][c])
        }
    }

    return outMatrix;
}

function transposeMatrix(matrix) {
    // Flipped version of the original matrix across its main diagonal (top-left to bottom-right)
    const rows = matrix.length;
    const cols = matrix[0].length;
    let outMatrix = [];

    for (let c = 0; c < cols; c++) {
        outMatrix[c] = []
        for (let r = 0; r < rows; r++) {
            outMatrix[c].push(matrix[r][c])
        }
    }

    return outMatrix;
}


let mSquare = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let m = [
    [1,2],
    [3,4],
    [5,6],
    [7,8]
];


console.log(transposeMatrix(m));
