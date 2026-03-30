class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let grouped = {}

        for(let i=0;i<strs.length;i++){
            let sortedStr = strs[i];
            sortedStr = sortedStr.split("").sort().join("");

            if(grouped[sortedStr])
                grouped[sortedStr].push(strs[i]);
            else 
                grouped[sortedStr] = [strs[i]];
        }

        return Object.values(grouped);

    }
}
