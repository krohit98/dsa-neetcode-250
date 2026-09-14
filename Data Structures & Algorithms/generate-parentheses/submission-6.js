class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        let paranthesis = "";

        function backtrack(opened, closed) {
            if(paranthesis.length == 2*n){
                result.push(paranthesis);
                return;
            }

            if(opened < n) {
                paranthesis += "(";
                backtrack(opened+1, closed);
                paranthesis = paranthesis.slice(0,-1);
            }

            if(closed < opened) {
                paranthesis += ")";
                backtrack(opened, closed+1);
                paranthesis = paranthesis.slice(0,-1);
            }

        }

        backtrack(0, 0);
        return result;
    }
}
