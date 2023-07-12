// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }

    addWord(string) {
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
  
    populateSuffixTrieFrom(string) {
        this.addWord(string);
        let idx = 1;
        while (idx < string.length) {
            this.addWord(string.slice(idx));
            idx++;
        }
    }
  
    contains(string) {
        let idx = 0;
        let ptr = this.root;
        while (idx < string.length) {
            if (ptr.hasOwnProperty(string[idx])) {
                ptr = ptr[string[idx]];
                idx++;

            } else {
                return false;
            }
        }
        return ptr.hasOwnProperty(this.endSymbol);
    }
}
  
let sTrie = new SuffixTrie('test'); 
console.log(sTrie.contains('t'));
exports.SuffixTrie = SuffixTrie;
