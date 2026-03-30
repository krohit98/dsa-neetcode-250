class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;

        let chars = new Array(26).fill(0);

        for(let i=0;i<s.length;i++){
            chars[s.charCodeAt(i)-97]++;
        }
        for(let j=0;j<t.length;j++){
            chars[t.charCodeAt(j)-97]--;
        }
        for(let k=0;k<26;k++){
            if(chars[k] > 0) return false;
        }
        return true;
    }
}
