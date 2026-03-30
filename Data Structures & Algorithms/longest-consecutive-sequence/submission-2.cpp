class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_map<int,char> map;

        for(auto x:nums) map[x]='u';
        int length = 0;

        for(auto x:nums){
            if(map[x] == 'v') continue;
            int temp=0;
            int k = x;
            while(map[k]){
                map[k] = 'v';
                temp++; 
                k++;
            }
            length = temp > length ? temp : length;
        }

        return length;
    }
};
