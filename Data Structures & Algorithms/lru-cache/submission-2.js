class Node {
    constructor(key = null, val = null, next = null, prev = null){
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.count = 0; // maintain count
        this.cache = {}; // map to contain key:pointer to node
        this.keyList = new Node(); // double linked list (keyList is head pointer)
        this.mostRecentKey = this.keyList; // maintain recent key node
    }

    relink(fetchedNode){
        // connect previous of fetched node to next of fetched node
        fetchedNode.prev.next = fetchedNode.next;
        // connect next of fetched node to prev of fetched node
        fetchedNode.next.prev = fetchedNode.prev;
        // set prev of fetched node to most recent key
        fetchedNode.prev = this.mostRecentKey;
        // set next of fetched node to null
        fetchedNode.next = null;
        // set next of most recent key to fetched node
        this.mostRecentKey.next = fetchedNode;
        // set most recent key to fetched node
        this.mostRecentKey = fetchedNode;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.hasOwnProperty(key)){
            // get pointer to fetched node
            let node = this.cache[key];
            // if fetched node is not the most recent node
            if(node != this.mostRecentKey){
                // relink
                this.relink(node)
            }
            // return value
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.hasOwnProperty(key)){
            // get pointer to fetched node
            let node = this.cache[key];
            // update value
            node.val = value;
            // if fetched node is not the most recent node
            if(node != this.mostRecentKey){
                // relink node
                this.relink(node)
            }
        }
        else{
            // create a new node
            let newNode = new Node(key, value);
            // set prev of new node to recent node
            newNode.prev = this.mostRecentKey;
            // set next of recent node to new node 
            this.mostRecentKey.next = newNode;
            // set mostRecentKey pointer to new node
            this.mostRecentKey = newNode;
            // set new node pointer in cache against key
            this.cache[key] = newNode;
            // increment count by 1
            this.count++;
            // if count more than capacity
            if(this.count > this.capacity){
                // get pointer to least used node
                let leastUsed = this.keyList.next;
                // set prev of next of least used to keyList
                leastUsed.next.prev = this.keyList;
                // set next of keyList to next of least used
                this.keyList.next = leastUsed.next;
                // delete key from cache
                delete this.cache[leastUsed.key]
                // decrement count by 1
                this.count--;
            }
        }
    }
}
