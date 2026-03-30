class MinStack {

    constructor() {
        this.stack = [];
        this.min = Number.MAX_SAFE_INTEGER;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.min = Math.min(this.min, val)
        this.stack.push([val,this.min]);
    }

    /**
     * @return {void}
     */
    pop() {
        let popped = this.stack.pop();
        let top = this.stack.length - 1;
        let lastMin = top >= 0 ? this.stack[top][1] : Number.MAX_SAFE_INTEGER;
        this.min = lastMin;
        return popped;
    }

    /**
     * @return {number}
     */
    top() {
        let top = this.stack.length - 1;
        return this.stack[top][0]
    }

    /**
     * @return {number}
     */
    getMin() {
        let top = this.stack.length - 1;
        return this.stack[top][1]
    }
}
