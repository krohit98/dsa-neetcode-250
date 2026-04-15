class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let majorityMap = new Map();
        for(let i=0;i<nums.length;i++){
            if(!majorityMap.has(nums[i]) && majorityMap.size == 2){
                majorityMap.forEach((value,key) => {
                    value--;
                    if(value > 0) majorityMap.set(key, value);
                    else majorityMap.delete(key);
                })
            }
            else majorityMap.set(nums[i], (majorityMap.get(nums[i]) || 0)+1);
        }
        for(let i=0;i<nums.length;i++){
            if(i==0) majorityMap.forEach((_,key) => majorityMap.set(key,0));
            if(majorityMap.has(nums[i])){
                majorityMap.set(nums[i], majorityMap.get(nums[i])+1)
            }
        }
        let result = [];
        majorityMap.forEach((val,key)=>{
            if(val > Math.floor(nums.length/3)) result.push(key);
        })
        return result;
    }
}
