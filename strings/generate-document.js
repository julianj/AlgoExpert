function generateDocument(characters, document) {
    let charactersMap = new Map();
    let count;
    let currentChar;

    for (let i = 0; i < characters.length; i++) {
        currentChar = characters[i];
        if (charactersMap.has(currentChar)) {
            count = charactersMap.get(currentChar)
            charactersMap.set(currentChar, count+1);
        } else {
            charactersMap.set(currentChar, 1);
        }
    }

    for (let i = 0; i < document.length; i++) {
        currentChar = document[i];
        if (charactersMap.has(currentChar)) {
            count = charactersMap.get(currentChar);
            if (count > 1) {
                charactersMap.set(currentChar, count-1);
            } else {
                charactersMap.delete(currentChar);
            }
        } else {
            return false;
        }
    }

    return true;
  }

console.log(generateDocument("aheaolabbhb", "hello"));
console.log(generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"));

  // Do not edit the line below.
  exports.generateDocument = generateDocument;
  