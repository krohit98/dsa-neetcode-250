class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let start = 0;
        for(let end = 1; end<prices.length; end++){
            while(prices[end] < prices[start]) start++;
            maxProfit = Math.max(maxProfit, prices[end]-prices[start]);
        }
        return maxProfit;
    }
}
