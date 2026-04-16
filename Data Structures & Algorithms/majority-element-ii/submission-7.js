class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let num1 = 0, num2 = 0, count1 = 0, count2 = 0;

        for(let i=0;i<nums.length;i++){
            if(num1 == nums[i]){
                count1++;
            }
            else if(num2 == nums[i]){
                count2++;
            }
            else if(count1 == 0){
                num1 = nums[i];
                count1++;
            }
            else if(count2 == 0){
                num2 = nums[i];
                count2++;
            }
            else{
                count1--;
                count2--;
            }
        }

        count1 = 0, count2 = 0;

        for(let i=0;i<nums.length;i++){
            if(nums[i] == num1) count1++;
            if(nums[i] == num2) count2++;
        }

        let result = [];
        if(count1 > Math.floor(nums.length/3)) result.push(num1);
        if(count2 > Math.floor(nums.length/3)) result.push(num2);

        return result;
    }
}
