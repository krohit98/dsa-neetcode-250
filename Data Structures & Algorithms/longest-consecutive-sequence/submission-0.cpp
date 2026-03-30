class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_map<int,int> map;

        for(auto x:nums) map[x]++;
        int length = 0;

        for(auto x:nums){
            int temp=0;
            int k = x;
            while(map[k]){
                temp++; 
                k++;
            }
            length = temp > length ? temp : length;
        }

        return length;
    }
};
