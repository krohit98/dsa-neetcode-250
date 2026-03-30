class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // BRUTE FORCE

        // init result var to 0
        let result = 0;
        // run loop from i=0 to i<prices.length
        for(let i=0;i<prices.length;i++){
            // run loop from j=i+1 to j<prices.length
            for(let j=i+1;j<prices.length;j++){
                // put result equal to max of result, prices[j]-prices[i]
                result = Math.max(result, prices[j]-prices[i]);
            }
        }
        // return result
        return result;
    }
}
