class Solution {
public:

    string encode(vector<string>& strs) {
        string encoded = "";
        for(string x:strs){
            encoded+=x;
            encoded+=";";
        }
        return encoded;
    }

    vector<string> decode(string s) {
        vector<string> decoded;
        string temp = "";
        for(int i=0;i<s.size();i++){
            if(s[i] != ';') temp+=s[i];
            else{
                decoded.push_back(temp);
                temp = "";
            }
        }
        return decoded;
    }
};
