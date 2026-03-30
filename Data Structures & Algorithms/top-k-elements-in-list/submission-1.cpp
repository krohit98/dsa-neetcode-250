class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int,int> count;
        for(int x:nums) count[x]++;

        priority_queue<pair<int,int>> pq;
        for(auto x:count){
            pq.push({x.second,x.first});
        }

        vector<int> res;
        while(k>0){
            res.push_back(pq.top().second);
            pq.pop();
            k--;
        }

        return res;
    }
};
