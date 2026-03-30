class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let sum = 0;
        let maxLTR = [];
        let maxRTL = [];

        let max = 0; 
        // loop array from left-to-right and capture current maximum - height[i]
        for(let i=0;i<height.length;i++){
            max = Math.max(max,height[i]);
            maxLTR[i] = max - height[i];
        }

        max = 0;
        // loop array from right-to-left and capture current maximum - height[i]
        for(let j=height.length-1;j>=0;j--){
            max = Math.max(max, height[j]);
            maxRTL[j] = max - height[j];
        }

        // loop n-1 times and add minimum(maxLTR[i],maxRTL[i])
        for(let k=0;k<height.length;k++){
            sum+=Math.min(maxLTR[k],maxRTL[k]);
        }

        return sum;
    }
}
