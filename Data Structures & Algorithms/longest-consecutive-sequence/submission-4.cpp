class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        // sort input array
        // 2,3,4,4,5,10,20
        if(nums.size()==0) return 0;

        int result = 0;
        sort(nums.begin(),nums.end());

        int tempCount = 1;
        // loop over input array
        for(int i=1;i<nums.size();i++){
            // nums[i] = 1 + nums[i-1] -> in sequence, result+1
            if(nums[i] == nums[i-1]+1){
                tempCount++;
            }
            // nums[i] = nums[i-1] -> skip
            else if(nums[i] == nums[i-1]){
                continue;
            }
            // nums[i] > 1+nums[i-1] -> not in sequence, reset result
            else if(nums[i] > 1+nums[i-1]){
                result = max(result,tempCount);
                tempCount = 1;
            }
        }
        result = max(result,tempCount);

        // return result
        return result;
    }
};
