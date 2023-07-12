const Trie = require('./Trie');  

describe('Trie', () => {
    let trie;
    beforeEach(() => {
        trie = new Trie(['bad', 'word']);
    });

    test('Constructor initializes properties', () => {
        expect(trie.root).not.toEqual({});
        expect(trie.endSymbol).toBe('*');
    });

    test('addWord should add word to Trie', () => {
        trie.addWord('test');
        expect(trie.contains('test')).toBe(true);
    });

    test('addWords should add multiple words to Trie', () => {
        trie.addWords(['one', 'two']);
        expect(trie.contains('one')).toBe(true);
        expect(trie.contains('two')).toBe(true);
    });

    test('contains should return false for non-existent word', () => {
        expect(trie.contains('nonexistent')).toBe(false);
    });

    test('normalizeCharacter should convert leetspeak', () => {
        expect(trie.normalizeCharacter('0')).toEqual(['o']);
        expect(trie.normalizeCharacter('3')).toEqual(['e']);
        expect(trie.normalizeCharacter('1')).toEqual(['l', 'i']);
    });

    test('contains should return true for word in leetspeak', () => {
        trie.addWord('leet');
        expect(trie.contains('l33t')).toBe(true);
        expect(trie.contains('133+')).toBe(true);
        expect(trie.contains('|33+')).toBe(true);
    });
});
