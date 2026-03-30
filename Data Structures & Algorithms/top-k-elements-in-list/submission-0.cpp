class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        vector<int> res;
        vector<pair<int,int>> frequencyArr;
        unordered_map<int,int> map;
        for(auto x:nums) map[x]++;
        for(auto i:map) frequencyArr.push_back({i.second,i.first});
        sort(frequencyArr.begin(),frequencyArr.end());
        for(int i=0;i<k;i++){
            res.push_back(frequencyArr[frequencyArr.size() - 1 - i].second);
        }
        return res;
    }
};
