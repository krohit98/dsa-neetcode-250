class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let start = 0, end = 1;

        while(end < prices.length) {
            if(prices[end] > prices[start]){
                maxProfit = Math.max(maxProfit, prices[end]-prices[start]);
            }
            else {
                start = end;
            }
            end++;
        }

        return maxProfit
    }
}
