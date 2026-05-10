class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.dummy = new ListNode();
        this.front = this.dummy;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)) {
            let node = this.map.get(key);
            if(this.front != node){
                this.disconnectNode(node);
                this.moveNodeToFront(node);
            }
            return node.val;
        }
        else return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node;
        if(this.map.has(key)){
            node = this.map.get(key);
            node.val = value;
            if(this.front != node) this.disconnectNode(node);
        }
        else{
            node = new ListNode(key, value);
            if(this.map.size == this.capacity){
                this.removeLRUNode();
            }
        }
        this.map.set(key, node);
        if(this.front != node) this.moveNodeToFront(node);
    }

    disconnectNode(node){
        node.next.prev = node.prev;
        node.prev.next = node.next;
        node.next = null; 
    }

    moveNodeToFront(node){
        this.front.next = node;
        node.prev = this.front;
        this.front = node;
    }

    removeLRUNode(){
        this.map.delete(this.dummy.next.key)
        this.dummy.next = this.dummy.next.next;
        if(this.dummy.next) this.dummy.next.prev = this.dummy;
        else this.front = this.dummy;
    }
}

class ListNode {
    constructor(key = null, val = null, next = null, prev = null){
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
