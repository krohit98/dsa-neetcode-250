class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let count = 1;
        let i = this.stack.length-1;
        while(i>=0 && this.stack[i] <= price){
            count++;
            i--;
        }
        this.stack.push(price);
        return count;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
