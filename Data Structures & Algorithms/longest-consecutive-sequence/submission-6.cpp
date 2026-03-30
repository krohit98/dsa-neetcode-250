class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        
        if(nums.size()==0) return 0;

        // initialize result
        int result = 0;

        // sort input array
        // 2,3,4,4,5,10,20
        sort(nums.begin(),nums.end());

        // initialize tempCount variable to 1
        int tempCount = 1;

        // loop over input array
        for(int i=1;i<nums.size();i++){
            // nums[i] = 1 + nums[i-1] -> in sequence, tempCount++
            if(nums[i] == nums[i-1]+1){
                tempCount++;
            }
            // nums[i] > 1+nums[i-1] -> not in sequence
            // set result to max value, reset tempCount
            else if(nums[i] > 1+nums[i-1]){
                result = max(result,tempCount);
                tempCount = 1;
            }
        }
        // incase the array ends with a sequence
        // set result to max value b/w result and tempCount
        result = max(result,tempCount);

        // return result
        return result;
    }
};
