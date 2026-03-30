class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> res;
        unordered_map<string,vector<string>> map;
        for(int i=0;i<strs.size();i++){
            vector<int> count (26,0);
            for(int j=0;j<strs[i].size();j++){
                count[int(strs[i][j])-int('a')]+=1;
            }
            string countStr = "";
            for(int k=0;k<26;k++) {
                countStr+=to_string(count[k])+",";
            }
            cout<<countStr<<endl;
            map[countStr].push_back(strs[i]);
        }
        for(auto i:map){
            res.push_back(i.second);
        };
        return res;
    }
};
