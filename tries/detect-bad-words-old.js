const Trie = require('./Trie');
const randomWords = require('random-words');

function detectBadWords(text, badWords) {
    // Create Trie with the bad words
    let trie = new Trie(badWords);
    // check every word in text for badWords and return an array with the ones detected.
    return text.split(' ').filter((v, i) => {

        console.time(`Execution Time ${v}`);
        if (trie.contains(v)) {
            console.timeEnd(`Execution Time ${v}`);
            return v;
        }
        console.timeEnd(`Execution Time ${v}`);
    })
}

function detectBadWords(text, badWords) {
    let trie = new Trie2(badWords);
    return trie.checkForBadWordsIn(text);
}

const badWords = ["foo", "britan", "dar", "limon"];
const text = "foo 123456 br!t@n zar 11m0n";
console.log(detectBadWords(text, badWords));


function detectBadWordsInMap(text,badWords) {

    let map = new Map();
    badWords.forEach(element => {
        map.set(element, element);
    });

    return text.split(' ').filter((v, i) => {

        console.time(`Execution Time ${v}`);
        if (map.has(v)) {
            console.timeEnd(`Execution Time ${v}`);
            return v;
        }
        console.timeEnd(`Execution Time ${v}`);
    })
}


let dictionary = randomWords(500);
let text = "quokka zebuñion parrots lamp f0x amp |!0n lion apple";
dictionary = ["ma", "me", "mimma", "melon"];
text = "mi M4 mama me mim m@@ mucho mimma me1on mma"; 
console.log(detectBadWords(text, dictionary));
console.log(detectBadWordsInMap(text, dictionary));

