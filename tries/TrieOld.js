// Given a list of bad words and some text, detect all the bad words in the text.
class TrieOld {

    constructor(strings) {
        this.root = {};
        this.endSymbol = '*';
        this.leetMap = new Map();
        this.buildLeetMap()
        this.populateTrieFrom(strings);
    }

    buildLeetMap() {
        const leetArray = [
            ['0', 'o'],
            ['1', 'l'],
            ['2', 'z'],
            ['3', 'e'],
            ['4', 'a'],
            ['5', 's'],
            ['6', 'g'],
            ['7', 't'],
            ['8', 'b'],
            ['9', 'g'],
            ['@', 'a'],
            ['<', 'c'],
            ['(', 'c'],
            ['©', 'c'],
            ['|', 'l'],
            ['!', 'i'],
            ['+', 't'],
        ]
        for (let pair of leetArray) {
            this.leetMap.set(pair[0], pair[1]);
        }
    }

    normalizeCharacter(char) {
        if (this.leetMap.has(char.toLowerCase())) {
            return this.leetMap.get(char.toLowerCase());
        }
        return char.toLowerCase();
    }

    addWord(string) {
        string = string.toLowerCase()
        let idx = 0;
        let ptr = this.root;
        while (idx < (string.length - 1)) {
            if (!ptr.hasOwnProperty(string[idx])) {
                ptr[string[idx]] = {};
            }
            ptr = ptr[string[idx]];
            idx++;
        }
        if (!ptr.hasOwnProperty(string[idx])) {
            ptr[string[idx]] = {}
        }
        ptr[string[idx]][this.endSymbol] = true;
    }

    populateTrieFrom(strings) {
        strings.forEach(string => {
            this.addWord(string.toLowerCase());
            // If we want to check for suffixes then add all suffixes of string. Like below.
            /* let idx = 1;
            while (idx < string.length) {
                this.addWord(string.slice(idx).toLowerCase());
                idx++;
            } */
            // I we wanted to check for prefixes, then add all prefixes of string.
        });
    }

    contains(string) {
        let idx = 0;
        let ptr = this.root;
        let char = '';
        while (idx < string.length) {
            char = this.normalizeCharacter(string[idx]);
            if (ptr.hasOwnProperty(char)) {
                ptr = ptr[char];
                idx++;

            } else {
                return false;
            }
        }
        return ptr.hasOwnProperty(this.endSymbol);
    }
}

module.exports = Trie;