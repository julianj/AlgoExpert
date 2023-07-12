function firstNonRepeatingCharacter(string) {
    let charsMap = new Map();

    for (let i = 0; i < string.length; i++) {
        if (charsMap.has(string[i])) {
            charsMap.set(string[i], -1);
        } else {
            charsMap.set(string[i], i);
        }
    }

    for (let [key, value] of charsMap) {
        if (value != -1) {
            return value;
        }
    }    
    return -1;
}
  
console.log(firstNonRepeatingCharacter("ababac"));
  
  // Do not edit the line below.
  exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
  