class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxAmount = 0;
        let n = heights.length;
        let start = 0, end = n-1;
        while(start<end){
            maxAmount = Math.max(maxAmount, Math.min(heights[start],heights[end])*(n-1));
            n--;
            heights[start]<=heights[end]?start++:end--;
        }

        return maxAmount;
    }
}
