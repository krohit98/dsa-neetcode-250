class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const majority = {};
        const k = nums.length / 2;
        for(let i=0;i<nums.length;i++){
            majority[nums[i]] ? majority[nums[i]]++ : majority[nums[i]] = 1;
        }
        for(let [num, freq] of Object.entries(majority)){
            if(freq > k) return num;
        }
    }
}
