let head;
let tail;
let cache;
let globalTtl;
let length;

// Options
let useGlobalTtl;
let maxLength;
let triggerLength;
let onDispose;
let onEmpty;

class FastTLRU {
    // Defines an optional default maxAge
    constructor(inputTtl, options = {}){
        if(isNaN(inputTtl) && inputTtl <= 0) throw new Error(`Please provide a 'globalTtl' > 0ms. It will be used as a default ttl if one is not provided when 'setting' an item.`);
        globalTtl = inputTtl;

        if(options) _setOptions(options);
        
        head = undefined;
        tail = undefined;
        cache = {};
        length = 0;
    }

    set(key, value, ttl) {
        const data = value;
        const nodeTtl = (!useGlobalTtl && !!ttl) ? ttl : globalTtl;
        const newNode = new Node(key, data, nodeTtl);

        cache[key] = newNode;
        _setHead(newNode);
        length++;

        _checkTriggers(this);
    }

    /*
    Only clean cache if node _getNode() === undefined
    */
    get(key) {
        if(key === undefined) return this.pop();

        const currentTime = _getCurrentNS();
        const node = _getNode(this, key, currentTime);
        
        if(node){
            _moveToHead(node, currentTime);
            return node.data;
        }
        _checkTriggers(this);
    }
    peek(key) {
        if(key === undefined) return this.pop();

        const currentTime = _getCurrentNS();
        const node = _getNode(this, key, currentTime);
        if(node) return node.data;
    }
    pop() {
        const currentTime = _getCurrentNS();
        const head = _getHead(this, currentTime);
        return head ? head.data : undefined;
    }

    del(key) {
        const currentTime = _getCurrentNS();
        const node = key === undefined ? _getHead(this, currentTime) : _getNode(this, key, currentTime);

        if(node) _delNode(this, node);
    }

    cleanCache(node) {
        const currentTime = _getCurrentNS();
        
        if(useGlobalTtl){
            while(tail && tail.isOld(currentTime)){
                _delNode(this, tail);
            }
        }
        else {
            while(node && node.isOld(currentTime)){
                _delNode(this, node);

                node = node.next;
            }
        }
    }
    trimCache(trimTo = maxLength) {
        if(isNaN(trimTo)) return;
        while(length > trimTo) _delNode(this, tail);
    }
    resetCache() {
        if(onEmpty) onEmpty(cache);

        head = tail = undefined;
        cache = {};
        length = 0;
    }

    has(key) {
        // if(length === 0) return false; //_throwEmptyError();
        return (key in cache);
    }
    getLength() { return length; }
}


const _setOptions = (options) => {
    useGlobalTtl = options.useGlobalTtl ? options.useGlobalTtl : undefined;
    maxLength = options.maxLength ? options.maxLength : undefined;
    triggerLength = options.triggerLength ? options.triggerLength : options.auto ? 1 : undefined;
    onDispose = options.onDispose ? options.onDispose : undefined;
    onEmpty = options.onEmpty ? options.onEmpty : undefined;
}

class Node {
    constructor(key, data, TTL){
        this.key = key;
        this.data = data;
        this.ttl = TTL;

        this.next = undefined;
        this.prev = undefined;

        this.updateLastUsed();
    }

    isExpired() {
        return this.ttl <= _getCurrentNS() - this.lastUsed;
    }
    /*
        Used instead of isExpired()
        to reduce calls to _getCurrentNS()
    */
    isOld(currentTime) {
        return this.ttl <= currentTime - this.lastUsed;
        
    }
    setLastUsed(lastUsed) {
        this.lastUsed = lastUsed;
    }
    updateLastUsed() {
        this.lastUsed = _getCurrentNS();
    }
}

/*
Can overwrite head and tail
*/
const _getNode = (that, key, currentTime) => {
    if(!that.has(key)) return;

    const node = cache[key];
    if(node.isOld(currentTime)) return _checkTriggers(that, node);

    return node;
}
/*
Returns:
    -head node or
    -undefined if no head/ head is expired + useGlobalTtl

Can overwrite head and tail
*/
const _getHead = (that, currentTime) => {
    if(head === undefined) return; //_throwEmptyError();
    if(head.isOld(currentTime)) return _checkTriggers(that, head);

    return head;
}
const _setHead = (newHead) => {
    if(length === 0) {
        head = newHead;
        tail = newHead;
    }
    else {
        newHead.next = head;
        newHead.prev = undefined;
        head.prev = newHead;
        head = newHead;
    }
}
const _moveToHead = (node, currentTime) => {
    if(node === head) {} // Do nothing
    else{
        _removeFromLinkedList(node);

        _setHead(node);
    }

    node.setLastUsed(currentTime);
}
/*
Can overwrite head and tail
*/
const _delNode = (that, node) => {
    if(node === head) {
        if(node === tail) return that.resetCache();
        if(useGlobalTtl) return that.resetCache(); //_throwItemExpiredError();
    }

    _removeFromLinkedList(node);
    _removeFromObject(node.key);
    length--;

    if(onDispose) onDispose(node);
}
const _removeFromLinkedList = (node) => {
        // Remove from linked list
        if(node === tail) _deleteListTail(node);
        else if(node === head) _deleteListHead(node);
        else _deleteListNode(node);
}
const _deleteListTail = (node) => {
    tail = tail.prev;
    tail.next = undefined;
}
const _deleteListHead = (node) => {
    head = head.next;
    head.prev = undefined;
}
const _deleteListNode = (node) => {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}
const _removeFromObject = (key) => delete cache[key];

const _getCurrentNS = () => {
    const [sec, ns] = process.hrtime();

    return sec * 1000000000 + ns;
}

const _checkTriggers = (that, node) => {
    if(!isNaN(triggerLength) && length >= triggerLength) that.cleanCache(node);
    if(!isNaN(maxLength) && length > maxLength) that.trimCache();
}

const _throwEmptyError = () => {
    throw new Error('Cache is empty!');
}
const __throwNoKeyError = () => {
    throw new Error('Please supply a key!');
}
const _throwNonExistantKeyError = () => {
    throw new Error('Key does not exist in testCache!');
}
const _throwItemExpiredError = () => {
    throw new Error('That item has expired, cleaning cache now!');
}
const _throwCacheExpiredError = () => {
    throw new Error('All item have expired, reseting cache now!');
}

module.exports = FastTLRU;