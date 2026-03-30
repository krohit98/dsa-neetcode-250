class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for(let i=0;i<nums.length;i++){
            map[nums[i]] = map[nums[i]] ? map[nums[i]]+1:1;
        }
        
        let numArr = Object.entries(map);

        numArr.sort((a,b)=>b[1]-a[1]);

        let result = [];

        for(let i=0; i<k; i++){
            result[i] = numArr[i][0];
        }

        return result;
    }
}
