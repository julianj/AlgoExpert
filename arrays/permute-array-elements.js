function getPermutationsHelper(i, array, perms) {

    if (i == array.length - 1) {
        perms.push(array.slice());
    } else {
        for (let j = i; j < array.length; j++) {
            swap(array, i, j);
            getPermutationsHelper(i + 1, array, perms);
            swap(array, j, i);
        }
    }
}

function swap(array, i, j) {
    tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function getPermutations(arr) {
    perms = [];
    getPermutationsHelper(0, arr, perms);
    return perms;
}


// Do not edit the line below.
exports.getPermutationsHelper = getPermutationsHelper;

console.log(getPermutations([1, 2, 3]));