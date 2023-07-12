function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort();
    blueShirtHeights.sort();
    backRow = blueShirtHeights
    frontRow = redShirtHeights
    if (redShirtHeights[0] > blueShirtHeights[0]) {
        backRow = redShirtHeights
        frontRow = blueShirtHeights
    }
    for (i = 0; i < backRow.length; i++) {
        if (backRow[i] <= frontRow[i]) {
            return false;
        }
    }
    return true;
}

console.log(classPhotos([2, 4, 7, 5, 1], [3, 5, 6, 8, 2]));
// Do not edit the line below.
exports.classPhotos = classPhotos;

