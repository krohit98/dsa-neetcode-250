class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        let paranthesis = [];

        function backtrack(opened, closed) {
            if(paranthesis.length == 2*n){
                result.push(paranthesis.join(""));
                return;
            }

            if(opened < n) {
                paranthesis.push("(");
                backtrack(opened+1, closed);
                paranthesis.pop();
            }

            if(closed < opened) {
                paranthesis.push(")");
                backtrack(opened, closed+1);
                paranthesis.pop();
            }

        }

        backtrack(0, 0);
        return result;
    }
}
