// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to put new properties and methods to the class.

function DLinkedNode(val, next, prev) {
    this.val = (val === undefined) ? {} : val;
    this.next = (next === undefined) ? null : next;
    this.prev = (prev === undefined) ? null : prev;
}

class CacheList {
    head;
    tail;

    constructor(head, tail) {
        this.head = head ?? null;
        this.tail = tail ?? null;
    }

    put(obj) {
        let newNode = new DLinkedNode(obj, this.head, null);
        if (null === this.head) {
            // cacheList is empty
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    remove(obj) {
        if (obj == this.tail && obj == this.head) {
            this.tail = null;
            this.head = null;
        } else if (obj == this.tail) {
            this.tail = obj.prev;
            this.tail.next = null;
        } else if (obj == this.head) {
            this.head = obj.next;
            this.head.prev = null;
        } else {
            obj.prev.next = obj.next;
            obj.next.prev = obj.prev;
        }
    }

    evictLast() {
        let evicted = this.tail;
        if (evicted == this.tail && evicted == this.head) {
            this.tail = null;
            this.head = null;
        } else {
            if (this.tail && this.tail.prev) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
        }
        return evicted;
    }

    getMostRecent() {
        return this.head;
    }

    print() {
        const keyValStr = (node) => node.val.key + ':' + node.val.value + ' > ';
        let sentinel = this.head
        let list = '';
        while (sentinel != null) {
            list = list + keyValStr(sentinel);
            sentinel = sentinel.next;
        } 
        console.log(list);
    }
}

class LRUCache {
    constructor(maxSize) {
        this.maxSize = maxSize || 1;
        this.cache = new Map();
        this.cacheList = new CacheList();
    }

    insertKeyValuePair(key, value) {
        let val = this.cache.get(key);
        const keyExist = (undefined !== val);
        if (keyExist) {
            this.cacheList.remove(val);
        } else {
            if (this.cache.size >= this.maxSize) {
                let evicted = this.cacheList.evictLast();
                if (evicted) {
                    console.log(`evicting ${evicted.val.key}`);
                    this.cache.delete(evicted.val.key);
                }
            }
        }
        this.cacheList.put({ key: key, value: value });
        this.cache.set(
            key,
            this.cacheList.head);
    }

    getValueFromKey(key) {
        let val = this.cache.get(key);
        if (undefined === val) {
            return null;
        }
        this.cacheList.remove(val);
        this.cacheList.put({ key: key, value: val.val.value });
        this.cache.set(
            key,
            this.cacheList.head);
        return this.cacheList.head.val.value;
    }

    getMostRecentKey() {
        let mostRecent = this.cacheList.getMostRecent();
        if (mostRecent) {
            return mostRecent.val.key;
        }
        return null
    }
    print() {
        let tmp = '';
        this.cache.forEach((v, k) => {
            tmp = tmp + '(' + k + ':' + v.val.value + '),';
        })
        console.log(tmp);
        this.cacheList.print();
    }
}

function runTest1() {
    let cache = new LRUCache(3);
    cache.insertKeyValuePair("b", 2)
    cache.insertKeyValuePair("a", 1)
    cache.insertKeyValuePair("c", 3)
    console.log("c", cache.getMostRecentKey());
    console.log("1", cache.getValueFromKey("a"));
    console.log("a", cache.getMostRecentKey());
    cache.insertKeyValuePair("d", 4);
    console.log("None", cache.getValueFromKey("b"));
    cache.insertKeyValuePair("a", 5);
    console.log("5", cache.getValueFromKey("a"));
}

function runTest2() {
    let cache = new LRUCache(1);
    console.log("null", cache.getValueFromKey("a"));
    cache.print();
    cache.insertKeyValuePair("a", 1);
    cache.print();
    console.log("1", cache.getValueFromKey("a"));
    cache.print();
    cache.insertKeyValuePair("a", 9001);
    cache.print();
    console.log("9001", cache.getValueFromKey("a"));
    cache.print();
    cache.insertKeyValuePair("b", 2)
    cache.print();
    console.log("9001", cache.getValueFromKey("a"));
    cache.print();
    console.log("2", cache.getValueFromKey("b"));
    cache.print();
    cache.insertKeyValuePair("c", 3)
    cache.print();
    console.log("9001", cache.getValueFromKey("a"));
    cache.print();
    console.log("null", cache.getValueFromKey("b"));
    cache.print();
    console.log("3", cache.getValueFromKey("c"));
    cache.print();

}


function runTest5() {
    let cache = new LRUCache(4);
    cache.insertKeyValuePair("a", 1)
    cache.print();
    cache.insertKeyValuePair("b", 2)
    cache.print();
    cache.insertKeyValuePair("c", 3)
    cache.print();
    cache.insertKeyValuePair("d", 4)
    cache.print();
    console.log("1", cache.getValueFromKey("a"));
    cache.print();
    cache.insertKeyValuePair("e", 5);
    cache.print();
    console.log("1", cache.getValueFromKey("a"));
    cache.print();
    console.log("null", cache.getValueFromKey("b"));
    cache.print();
    console.log("3", cache.getValueFromKey("c"));
    cache.print();
    cache.insertKeyValuePair("f", 5);
    cache.print();
    console.log("3", cache.getValueFromKey("c"));
    cache.print();
    console.log("NULL", cache.getValueFromKey("d"));
    cache.print();
    cache.insertKeyValuePair("g", 5);
    cache.print();
    console.log("NULL", cache.getValueFromKey("e"));    // should be null NOT 5
    cache.print();
    console.log("1", cache.getValueFromKey("a"));   // should be 1 NOT null 
    cache.print();
    console.log("3", cache.getValueFromKey("c"));
    cache.print();
    console.log("5", cache.getValueFromKey("f"));
    cache.print();
    console.log("5", cache.getValueFromKey("g"));
    cache.print();
}

runTest2();
// Do not edit the line below.
exports.LRUCache = LRUCache;
