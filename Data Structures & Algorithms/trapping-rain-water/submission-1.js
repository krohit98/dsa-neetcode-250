class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxHeight = 0;
        let ltr = [];
        for(let i=0; i<height.length; i++){
            maxHeight = Math.max(maxHeight, height[i]);
            ltr.push(maxHeight - height[i]);
        }

        maxHeight = 0;
        let rtl = new Array(height.length);
        for(let j=height.length-1; j>=0; j--) {
            maxHeight = Math.max(maxHeight, height[j]);
            rtl[j] = maxHeight - height[j];
        }

        let result = 0;
        for(let k=0; k<height.length; k++) {
            result += Math.min(ltr[k], rtl[k]);
        }

        return result;
    }
}
