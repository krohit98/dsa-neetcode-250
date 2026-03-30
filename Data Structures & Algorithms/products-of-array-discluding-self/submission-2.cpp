class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> res(nums.size());

        for(int i=0;i<nums.size();i++){
            res[i] = nums[i] * (i==0?1:res[i-1]);
        }

        for(int j=nums.size()-1;j>=0;j--){
            int postfix = nums[j] * (j==nums.size()-1?1:nums[j+1]);
            nums[j] = postfix;
            // res[j] = prefix * postfix;
            res[j] = (j==0?1:res[j-1]) * (j==nums.size()-1?1:nums[j+1]);
        }

        for(int k=0;k<nums.size();k++){
            cout<<res[k]<<" ";
        }

        return res;
    }
};
