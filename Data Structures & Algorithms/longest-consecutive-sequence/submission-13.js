class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxCount = 0;
        let numsMap = {};
        for(let i=0;i<nums.length;i++){
            numsMap[nums[i]] = 'unvisited';
        }
        console.log(numsMap)
        for(let i=0;i<nums.length;i++){
            if(numsMap[nums[i]] == 'visited') continue;
            let count = 1;
            let num = nums[i];
            numsMap[num] = 'visited';
            while(numsMap[++num]) {
                numsMap[num] = 'visited'
                count++;
            }
            num = nums[i];
            while(numsMap[--num]) {
                numsMap[num] = 'visited'
                count++;
            }
            maxCount = Math.max(maxCount, count);
        }
        return maxCount;
    }
}
