class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // SLIDING WINDOW

        // init result var to 0
        let result = 0;
        // init winStart var to 0
        let winStart = 0;
        // run loop from winEnd = 1 to winEnd < prices.length
        for(let winEnd = 1; winEnd < prices.length; winEnd++){
            // if prices[winEnd] less than equal to prices[winStart]
            if(prices[winEnd] <= prices[winStart]){
                // make winStart equal to winEnd
                winStart = winEnd;
                // continue to next iteration
                continue;
            }
            // put result equal to max of result, prices[winEnd]-prices[winStart]
            result = Math.max(result, prices[winEnd]-prices[winStart])
        }
        // return result
        return result;
    }
}
