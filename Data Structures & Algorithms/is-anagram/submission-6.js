class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        let sArr = new Array(26).fill(0);
        let tArr = new Array(26).fill(0);

        for(let i=0;i<s.length;i++) {
            sArr[s.charCodeAt(i)-97]++;
            tArr[t.charCodeAt(i)-97]++;
        }

        return sArr.join(',') == tArr.join(',')
    }
}
