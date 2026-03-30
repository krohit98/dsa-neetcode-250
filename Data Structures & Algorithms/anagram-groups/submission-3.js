class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let grouped = {}

        for(let i=0;i<strs.length;i++){

            let countArr = new Array(26).fill(0);
            for(let j=0;j<strs[i].length;j++){
                countArr[strs[i].charCodeAt(j) - 97]++;
            }

            let stringCount = countArr.join(",");

            if(grouped[stringCount])
                grouped[stringCount].push(strs[i]);
            else 
                grouped[stringCount] = [strs[i]];
        }

        return Object.values(grouped);

    }
}
