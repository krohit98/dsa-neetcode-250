class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.size() != t.size()) return false;
        unordered_map<int, int> map;
        for(auto x:s){
            map[x]++;
        }
        for(auto y:t){
            map[y]--;
        }
        for(auto x:s){
            if(map[x] != 0) return false;
        }
        return true;
    }
};
