class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};

        for(let i=0;i<strs.length;i++){
            const charArray = new Array(26);
            for(let j=0;j<strs[i].length;j++){
                let [character, frequency] = charArray[strs[i].charCodeAt(j) - 97]?.split('-') || [strs[i][j], 0];
                charArray[strs[i].charCodeAt(j) - 97] = `${character}-${++frequency}`;
            }
            const charString = charArray.join('');
            anagrams[charString] ? anagrams[charString].push(strs[i]) : anagrams[charString] = [strs[i]];
        }
        return Object.values(anagrams);
    }
}
