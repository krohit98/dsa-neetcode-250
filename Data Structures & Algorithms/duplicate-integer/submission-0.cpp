class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        unordered_map<int,int> map;
        for(auto x:nums){
            map[x]++;
        }
        for(auto x:nums){
            if(map[x] > 1) return true;
        }
        return false;
    }
};
