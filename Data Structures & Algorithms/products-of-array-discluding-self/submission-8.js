class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ltr = new Array(nums.length);
        ltr[0] = nums[0];
        for(let i=1; i<nums.length; i++) {
            ltr[i] = nums[i] * ltr[i-1];
        }

        let rtl = new Array(nums.length);
        rtl[nums.length-1] = nums[nums.length-1];
        for(let j=nums.length-2; j>=0; j--) {
            rtl[j] = nums[j] * rtl[j+1];
        }

        let result = new Array(nums.length);
        for(let k=0; k<nums.length; k++) {
            result[k] = (k === 0 ? 1 : ltr[k-1]) * (k === nums.length-1 ? 1 : rtl[k+1]);
        }

        return result;
    }
}
