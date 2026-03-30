class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> prefix(nums.size());
        vector<int> postfix(nums.size());

        for(int i=0;i<nums.size();i++){
            prefix[i] = nums[i] * (i==0?1:prefix[i-1]);
        }

        for(int j=nums.size()-1;j>=0;j--){
            postfix[j] = nums[j] * (j==nums.size()-1?1:postfix[j+1]);
        }

        vector<int> res(nums.size());
        for(int k=0;k<nums.size();k++){
            res[k] = (k==0?1:prefix[k-1])*(k==nums.size()-1?1:postfix[k+1]);
        }

        return res;
    }
};
