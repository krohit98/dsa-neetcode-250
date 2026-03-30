class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        
        const sChar = new Array(26).fill(0);
        const tChar = new Array(26).fill(0);

        for(let i=0;i<s.length;i++){
            sChar[s.charCodeAt(i) - 97] += 1;
        }

        for(let j=0;j<t.length;j++){
            tChar[t.charCodeAt(j) - 97] += 1;
        }

        if(sChar.join('') === tChar.join(''))
            return true;
        return false;
    }
}
