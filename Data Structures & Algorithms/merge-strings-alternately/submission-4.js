class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let p1 = 0, p2 = 0, word = "";
        while(p1 < word1.length || p2 < word2.length) {
            if(p1 < word1.length) word += word1[p1++];
            if(p2 < word2.length) word += word2[p2++];
        }
        return word;
    }
}
