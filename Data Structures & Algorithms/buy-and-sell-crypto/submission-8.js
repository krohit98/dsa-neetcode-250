class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // init maxProfit to 0
        let maxProfit = 0;
        // init start ptr to 0
        let start = 0;

        // run loop for end equal to 0 till end < prices.length
        for(let end = 0; end < prices.length; end++){
            // if prices[end] is less than or equal to prices[start]
            if(prices[end] <= prices[start])
                // update start to end
                start = end;
            // else
            else
                // update maxProfit to max of maxProfit, prices[end]-prices[start]
                maxProfit = Math.max(maxProfit, prices[end]-prices[start])
        }

        // return result
        return maxProfit;
    }
}
