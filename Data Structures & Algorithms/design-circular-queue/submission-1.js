class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.size = k;
        this.count = 0;
        this.front = null;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.count==this.size) return false;
        let node = new ListNode(value,this.front?.next || null);
        if(this.count == 0) this.front = node;
        this.front.next = node;
        this.count++;
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(this.count == 0) return false;
        if(this.count == 1){
            this.front = null;
            this.count = 0;
            return true;
        }
        let node = this.front?.next;
        while(node.next!=this.front){
            node = node.next;
        }
        node.next = this.front.next;
        this.front = node;
        this.count--;
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        return this.count > 0 ? this.front.val : -1;
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.count > 0 ? this.front.next.val : -1;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !Boolean(this.count);
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.count == this.size;
    }
}

class ListNode {
    constructor(val=null,next=null){
        this.val = val;
        this.next = next;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
