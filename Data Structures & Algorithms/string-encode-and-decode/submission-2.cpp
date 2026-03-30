class Solution {
public:

    string encode(vector<string>& strs) {
        string encoded = "";
        for(string x:strs){
            encoded+=to_string(x.size())+"#"+x;
        }
        return encoded;
    }

    vector<string> decode(string s) {
        vector<string> decoded;
        stringstream wordLengthStr;
        int k=0;
        while(k<s.size()){
            int j=k;
            while(s[j]!='#'){
                wordLengthStr << s[j];
                j++;
            }
            k=j;

            int wordLength;
            wordLengthStr >> wordLength;
            wordLengthStr.clear();

            cout<<wordLength<<" ";
            
            decoded.push_back(s.substr(k+1, wordLength));
            k+=wordLength+1;
        }
        return decoded;
    }
};
