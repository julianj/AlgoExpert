function maximumPossibleTotalSpeed(redShirtSpeeds, blueShirtSpeeds) {
    return 0;
}

function minimumPossibleTotalSpeed(redShirtSpeeds, blueShirtSpeeds) {
    return 0;
}


function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    blueShirtSpeeds.sort((a, b) => b - a); // blue shirts always sorted descending
    if (fastest) {
        redShirtSpeeds.sort((a, b) => a - b); // red shirts sorted ascending   
    } else {
        redShirtSpeeds.sort((a, b) => b - a); // red shirts sorted descending   
    }
    let result = 0;
    for (let i = 0; i < blueShirtSpeeds.length; i++) {
        result += Math.max(blueShirtSpeeds[i], redShirtSpeeds[i]);
    }
    return result;
}
  
console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false));
  // Do not edit the line below.
  exports.tandemBicycle = tandemBicycle;