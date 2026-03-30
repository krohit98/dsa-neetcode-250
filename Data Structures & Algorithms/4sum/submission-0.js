class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        // BRUTE FORCE
        // sort nums
        nums.sort((a,b)=>a-b);
        // init resultArray
        let result = new Set();
        // run loop from i=0 to i<nums.length-3
        for(let i=0;i<nums.length-3;i++){
            // run loop from j=i+1 to j<nums.length-2
            for(let j=i+1;j<nums.length-2;j++){
                // run loop from k=j+1 to k<nums.length-1
                for(let k=j+1;k<nums.length-1;k++){
                    // run loop from l=k+1 to l<nums.length
                    for(let l=k+1;l<nums.length;l++){
                        // if nums[i]+nums[j]+nums[k]+nums[l] == target
                        if (nums[i]+nums[j]+nums[k]+nums[l] == target)
                            // push [nums[i],nums[j],nums[k],nums[l]] to resultArray
                            result.add(JSON.stringify([nums[i],nums[j],nums[k],nums[l]]));
                    }
                }
            }
        }
        // return result
        return Array.from(result).map(i => JSON.parse(i));
    }
}
