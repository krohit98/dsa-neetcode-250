class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int zeroCount = 0;
        int product = 1;
        for(int x:nums){
            if(x!=0) product*=x;
            else zeroCount++;
        }

        if(zeroCount > 1) {
            vector<int> zeroVec(nums.size(),0);
            return zeroVec;
        }

        vector<int> res;
        for(int x:nums) {
            if(x!=0){
                if(zeroCount == 1) res.push_back(0);
                else res.push_back(product/x);
            }
            else res.push_back(product);
        }

        return res;
    }
};
