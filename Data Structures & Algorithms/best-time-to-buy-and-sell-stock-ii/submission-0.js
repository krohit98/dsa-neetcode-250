class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let sum = 0, i=0;
        while(i<prices.length-1){
            while(i<prices.length-1 && prices[i+1] <= prices[i]){
                i++;
            }
            let buy = prices[i];
            while(i<prices.length-1 && prices[i+1] >= prices[i]){
                i++;
            }
            sum += (prices[i] - buy);
            console.log(sum);
        }
        return sum;
    }
}
