class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        // initialize hashset with elements from nums
        unordered_set<int> numSet(nums.begin(),nums.end());

        // initialize result variable
        int longest = 0;

        // loop over hashset
        for(int x:numSet){
            // if nums[i]-1 doesnt exist
            if(numSet.find(x-1) == numSet.end()){
                // initialize tempCount = 1
                int tempCount = 1;
                // run loop while nums[i]+1 exist in nums
                while(numSet.find(x+tempCount) != numSet.end()){
                    // increment tempCount
                    tempCount++;
                }
                // set longest to max b/w longest and tempCount
                longest = max(longest, tempCount);
            }
        }
        // return longest
        return longest;
    }
};
