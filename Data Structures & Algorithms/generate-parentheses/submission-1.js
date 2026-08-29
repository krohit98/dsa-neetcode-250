class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [], paranthesis = '';

        function backtrack(open, close) {

            if(paranthesis.length === (2*n)) {
                console.log(paranthesis)
                result.push(paranthesis)
                return;
            }

            if(open > 0) {
                paranthesis += '('
                backtrack(open-1, close);
                paranthesis = paranthesis.slice(0,-1);
            }
            if(close > open) {
                paranthesis += ')'
                backtrack(open, close-1);
                paranthesis = paranthesis.slice(0,-1);
            }
        }

        backtrack(n, n);
        return result;
    }
}
