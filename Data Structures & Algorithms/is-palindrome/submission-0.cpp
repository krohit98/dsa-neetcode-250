class Solution {
public:
    bool isPalindrome(string s) {

        // remove non-alphanumeric characters
        s = regex_replace(s,regex("[^a-zA-Z0-9]"),"");

        // initialize pointers
        int start = 0, end = s.size()-1;

        // run loop while pointers point to different elements
        while(end > start){
            // if(pointer does not point to equal alphanumeric characters, return false)
            if(tolower(s[start]) != tolower(s[end])) return false;
            start++;
            end--;
        }

        return true;

    }
};
