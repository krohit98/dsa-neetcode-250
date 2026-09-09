class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let result = [];
        let subset = [];

        if(!digits.length) return result;

        let digitMap = {
            '2':['a','b','c'],
            '3':['d','e','f'],
            '4':['g','h','i'],
            '5':['j','k','l'],
            '6':['m','n','o'],
            '7':['p','q','r','s'],
            '8':['t','u','v'],
            '9':['w','x','y','z']
        }

        function backtrack(start) {
            if(subset.length == digits.length) {
                result.push(subset.join(""));
                return;
            }

            let options = digitMap[digits[start]];
            for(let i=0;i<options.length;i++) {
                subset.push(options[i]);
                backtrack(start+1);
                subset.pop();
            }
        }

        backtrack(0);
        return result;
    }
}
