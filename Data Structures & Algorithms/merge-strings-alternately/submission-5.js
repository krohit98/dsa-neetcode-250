class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let p = 0, word = "";
        while(p < word1.length || p < word2.length) {
            if(p < word1.length) word += word1[p];
            if(p < word2.length) word += word2[p];
            p++;
        }
        return word;
    }
}
