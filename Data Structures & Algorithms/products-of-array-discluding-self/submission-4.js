class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ltrProd = new Array(nums.length);
        let rtlProd = new Array(nums.length);
        let result = new Array(nums.length);
        for(let i=0;i<nums.length;i++){
            ltrProd[i] = nums[i] * (i>0 ? ltrProd[i-1] : 1);
        }
        console.log("ltr",ltrProd);
        for(let j=nums.length-1;j>=0;j--){
            rtlProd[j] = nums[j] * (j<nums.length-1 ? rtlProd[j+1] : 1);
        }
        for(let k=0;k<nums.length;k++){
            if(k == 0) result[k] = rtlProd[k+1];
            else if(k == nums.length-1) result[k] = ltrProd[k-1];
            else result[k] = ltrProd[k-1] * rtlProd[k+1]
        }
        return result;
    }
}
