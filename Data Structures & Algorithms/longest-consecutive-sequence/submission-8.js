class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // initialize result variable to 0
        let res = 0;
        // initialize numsMap to {}
        let numsMap = {};
        // run loop from i=0 till i<nums.length
        for(let i=0;i<nums.length;i++){
            // push nums[i] in numsMap with value as true
            numsMap[nums[i]] = true;
        }

        // run loop from i=0 till i<nums.length
        for(let i=0;i<nums.length;i++){
            // initialize total variable to 0
            let total = 1;
            // initalize current variable to nums[i]
            let current = nums[i];
            // check if current is positive value
            if(numsMap[current]){
                // run loop while numsMap contains current-1
                while(numsMap[current-1]){
                    // increment total by 1
                    total++;
                    // decrement current by 1
                    current--;
                    // set numsMap[current] to false
                    numsMap[current] = false;
                }

                // set current to nums[i]
                current = nums[i];

                // run loop while numsMap contains current+1
                while(numsMap[current+1]){
                    // increment total by 1
                    total++;
                    // increment current by 1
                    current++;
                    // set numsMap[current] to false
                    numsMap[current] = false
                }

                // set res to max of res,total
                res = Math.max(res,total);
            }
        }

        // return res
        return res;
    }
}
