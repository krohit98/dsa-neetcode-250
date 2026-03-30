class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // initialize result with 0
        let maxProfit = 0;
        
        // initialize start and end
        let start = 0, end = 1;

        // run loop while start < n-1
        while(end < prices.length){
            // if end - start < 0,
            if(prices[end] - prices[start] < 0){
                // start = end; end = end+1
                start = end;
                end+=1;
            }
            // if end - start >= 0, 
            else{
                // result = max(result, prices[end]-prices[start])
                maxProfit = Math.max(maxProfit, prices[end] - prices[start]);
                // end=end+1
                end+=1;
            }
        }
        // return result
        return maxProfit;
    }
}
