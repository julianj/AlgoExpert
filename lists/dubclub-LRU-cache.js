// implement an LRU cache with maxCacheSize
function DLinkedNode(val, next, prev) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : next;
    this.prev = (prev === undefined) ? null : prev;
}

class CacheList {
    head;
    end;

    constructor(head, end) {
        this.head = head ?? null;
        this.end = end ?? null;
    }

    async add(obj) {
        let newNode = new DLinkedNode(obj, this.head, null);
        if (null === this.head) {
            // empty cache
            this.head = newNode;            
            this.end = this.head;
        } else {
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    async demoteLast() {
        let demoted = this.end;
        if (this.end && this.end.prev) {
            this.end = this.end.prev;
            this.end.next = null;
        }
        return demoted;
    }
}

class Cache {
    cache;
    cacheList;
    
    maxSizeCache = 3;

    constructor(map, cacheList) {
        this.cache = map ?? new Map();
        this.cacheList = cacheList ?? new CacheList();
    }

    async put(obj) {
        if (this.cache.size <= this.maxSizeCache) {
            this.cache.set(obj.id, obj);
        } else {
            // cache is full. We need to demote the last element from cacheList
            // and then remove it from the cache
            let demoted = await this.cacheList.demoteLast();
            if (demoted) {
                console.log(`demoting ${demoted.val.id}`);
                this.cache.clear(demoted.id);
            }
            this.cache.set(obj.id, obj);
        }
        await this.cacheList.add(obj);
    }
    
    async get(id) {
        let elem = this.cache.get(id);
        if (undefined === elem) {
            return null;
        }
        this.cache.put(elem);
        return elem;
    }
    
}

let cache = new Cache();
const A = { id: 1, name: 'uno' };
const B = { id: 2, name: 'dos' };
const C = { id: 3, name: 'tres' };
const D = { id: 4, name: 'cuatro' };
const E = { id: 5, name: 'cinco' };
const F = { id: 6, name: 'seis' };

cache.put(A);
console.log(cache.cacheList);
cache.put(B);
console.log(cache.cacheList);
cache.put(C);
console.log(cache.cacheList);
cache.put(D);
console.log(cache.cacheList);
cache.put(E);
console.log(cache.cacheList);
cache.put(F);
console.log(cache.cacheList);

