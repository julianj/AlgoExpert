class Trie {
    constructor(badWords) {
        this.root = {};
        this.endSymbol = '*';
        this.leetCodeMap = this.buildLeetMap();
        this.addWords(badWords);
    }

    buildLeetMap() {
        return {
            '0': ['o'],
            '1': ['l', 'i'],
            '2': ['z'],
            '3': ['e'],
            '4': ['a'],
            '5': ['s'],
            '6': ['g'],
            '7': ['t'],
            '8': ['b'],
            '9': ['g'],
            '@': ['a'],
            '<': ['c'],
            '(': ['c'],
            '©': ['c'],
            '|': ['l', 'i'],
            '!': ['i'],
            '+': ['t'],
        };
    }

    addWord(word) {
        let ptr = this.root;
        let i = 0;
        while (i < (word.length - 1)) {
            if (!ptr.hasOwnProperty(word[i])) {
                ptr[word[i]] = {};
            }
            ptr = ptr[word[i]];
            i++;    
        }
        if (!ptr.hasOwnProperty(word[i])) {
            ptr[word[i]] = {};
        }
        ptr[word[i]][this.endSymbol] = true;
    }

    addWords(words) {
        words.forEach((word) => this.addWord(word));
    }

    normalizeCharacter(char) {
        char = char.toLowerCase();
        if (this.leetCodeMap.hasOwnProperty(char)) {
            return this.leetCodeMap[char];
        }
        return [char];
    }

    contains(word) {
        let ptr = this.root;
        let i = 0;
        let res = undefined;
        while (i < (word.length)) {
            res = this.normalizeCharacter(word[i])
                .find(char => ptr.hasOwnProperty(char));
            if (undefined === res) {
                return false;
            }
            ptr = ptr[res];
            i++;
        }
        return ptr.hasOwnProperty(this.endSymbol);
    }

    checkForBadWordsIn(text) {
        const textList = text.split(' ');
        return textList.filter((word, idx) => this.contains(word));
    }
}

module.exports = Trie;