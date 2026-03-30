class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let charArray = {};
        for(let i=0;i<s.length;i++){
            charArray[s[i]] = (charArray[s[i]] || 0)+1;
        }
        for(let j=0;j<t.length;j++){
            charArray[t[j]]--;
            if(charArray[t[j]] == 0){
                delete charArray[t[j]];
            }
        }
        return !Boolean(Object.keys(charArray).length);
    }
}
