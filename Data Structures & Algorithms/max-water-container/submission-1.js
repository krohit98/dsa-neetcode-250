class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length-1;
        let result = 0;
        while(start < end){
            result = Math.max(result, (end-start)*Math.min(heights[start],heights[end]));
            if(heights[start] < heights[end]) start++;
            else end--;
        }
        return result;
    }
}
