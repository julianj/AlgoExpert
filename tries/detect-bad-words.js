const Trie = require('./Trie');
const randomWords = require('random-words');

function detectBadWords(text, badWords) {
    // Create Trie with the bad words
    let trie = new Trie(badWords);
    // check every word in text for badWords and return an array with the ones detected.
    return trie.checkForBadWordsIn(text);
}

let dictionary = randomWords(500);
dictionary.push("apple", "lion", "lamp");
let text = "quokka zebuñion parrots lamp f0x amp |!0n lion apple";
//dictionary = ["ma", "me", "mimma", "melon"];
//text = "mi M4 mama me mim m@@ mucho mimma me1on mma"; 
console.log(detectBadWords(text, dictionary));

