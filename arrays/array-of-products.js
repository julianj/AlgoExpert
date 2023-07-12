
function productOfArray(array) {
    if (array.length === 0) {
        return 1;
    }
    return array.reduce((pV, cV) => (pV * cV))
}
function arrayOfProducts(array) {

    let outputArray = [];
    for (let i = 0; i < array.length; i++) {
        outputArray[i] = productOfArray(array.slice(0,i)) * productOfArray(array.slice(i+1, array.length));
    }
    return outputArray;
}

console.log(arrayOfProducts([1, 2, 3]));