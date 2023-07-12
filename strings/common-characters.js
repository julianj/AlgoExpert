function commonCharacters(strings) {
    // Write your code here.
    let singleCharIndex = new Map();
    strings.forEach((string, idx) => {
        for (let i = 0; i < string.length; i++) {
            let stringsWithChar = singleCharIndex.get(string[i]);
            if (!stringsWithChar) {
                stringsWithChar = new Map();
            }
            if (!stringsWithChar.has(idx)) {
                stringsWithChar.set(idx);
                singleCharIndex.set(string[i], stringsWithChar);
            }
        }
        
    });

    let arr = [];
    singleCharIndex.forEach((stringsWithChar, char) => {
        if (stringsWithChar.size == strings.length) {
            arr.push(char);
        }
    })
    return arr;
  }
  
//console.log(commonCharacters(["abc", "bcd", "cbad"]));
console.log(commonCharacters(["aa", "aa"]));
  // Do not edit the line below.
  exports.commonCharacters = commonCharacters;
  