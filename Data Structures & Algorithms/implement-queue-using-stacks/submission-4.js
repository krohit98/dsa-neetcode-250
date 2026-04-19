class MyQueue {
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.pushStack.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.popStack.length == 0){
            while(this.pushStack.length > 0){
                this.popStack.push(this.pushStack.pop());
            }
        }
        return this.popStack.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        if(this.popStack.length == 0){
            while(this.pushStack.length > 0){
                this.popStack.push(this.pushStack.pop());
            }
        }
        return this.popStack[this.popStack.length-1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.pushStack.length && !this.popStack.length;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
