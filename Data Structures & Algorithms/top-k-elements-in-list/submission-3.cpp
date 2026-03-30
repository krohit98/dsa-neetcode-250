class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int,int> count;
        for(int x:nums) count[x]++;

        vector<vector<int>> freq(nums.size()+1);
        for(auto i:count) freq[i.second].push_back(i.first);

        vector<int> res;
        for(int i=freq.size()-1;i>0;i--){
            for(int j=0;j<freq[i].size();j++){
                res.push_back(freq[i][j]);
                if(--k == 0) return res;
            }
        }
    }
};
