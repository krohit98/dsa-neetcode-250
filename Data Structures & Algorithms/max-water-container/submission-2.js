class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0, end = heights.length-1, maxArea = 0;

        while(start < end) {
            maxArea = Math.max((Math.min(heights[start], heights[end]) * (end-start)), maxArea);
            if(heights[start] < heights[end]) {
                start++;
            }
            else if(heights[start] > heights[end]) {
                end--;
            }
            else {
                start++;
                end--;
            }
        }

        return maxArea;
    }
}
