class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let charArr1 = new Array(26).fill(0);
        let charArr2 = new Array(26).fill(0);

        for(let i=0; i<s1.length; i++) {
            charArr1[s1.charCodeAt(i)-'a'.charCodeAt(0)]++;
        }

        let charString = charArr1.join(",");

        let start = 0;

        for(let end=0; end<s2.length; end++) {
            charArr2[s2.charCodeAt(end)-'a'.charCodeAt(0)]++;
            if(end >= s1.length) {
                charArr2[s2.charCodeAt(start)-'a'.charCodeAt(0)]--;
                start++;
            }
            if(charString == charArr2.join(",")) return true;
        }

        return false;
    }
}
