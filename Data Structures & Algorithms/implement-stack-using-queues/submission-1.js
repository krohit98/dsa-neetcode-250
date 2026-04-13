class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        while(this.queue1.length > 0){
            this.queue2.unshift(this.queue1.pop());
        }
        this.queue1.unshift(x);
        while(this.queue2.length > 0){
            this.queue1.unshift(this.queue2.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.queue1.pop();
    }

    /**
     * @return {number}
     */
    top() {
        console.log(this.queue1)
        return this.queue1[this.queue1.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.queue1.length;
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
