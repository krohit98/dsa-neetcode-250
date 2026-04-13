class MyStack {
    constructor() {
        this.dequeue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.dequeue.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        return this.dequeue.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.dequeue[this.dequeue.length-1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.dequeue.length;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
