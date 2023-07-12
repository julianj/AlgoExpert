
class Trie {
    constructor(strings) {
      this.root = {};
      this.endSymbol = '*';
      this.populateTrieFrom(strings);
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
  
    populateTrieFrom(strings) {
        strings.forEach(string => {
            this.addWord(string);
            let idx = 1;
            while (idx < string.length) {
                this.addWord(string.slice(idx));
                idx++;
            }                
        });
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
        return true;
    }
}

function multiStringSearch(bigString, smallStrings) {

    // create Trie with bigString
    let trie = new Trie(bigString.split(' '));
    // check every smallString against the Trie and store result in array.
    return smallStrings.map((v, i) => {
        return trie.contains(v);
    })

}


console.log(multiStringSearch("ab cdefghijklmnopqrstuvwxyz", ["abc", "mnopqr", "wyz", "no", "e", "tuuv"]))
// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;
