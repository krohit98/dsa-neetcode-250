class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        // call and return backtrack with default values
        this.backtrack(n,0,0,'',result);
        return result;
    }

    // recursive function to backtrack all posibilities of valid paranthesis
    /**
     * @param {number} n
     * @param {number} countOpen
     * @param {number} countClosed
     * @param {string} stackString
     * @param {string[]} result
     * @return {string}
     */
    backtrack(n,countOpen, countClosed, stackString, result){
        // if countOpen equals countClosed equals n
        if(countOpen == countClosed && countOpen == n){
            // push stackString to result and return
            result.push(stackString);
            return;
        }

        // if countOpen < n
        if(countOpen < n)
            // call backtrack with open paranthesis
            this.backtrack(n, countOpen+1, countClosed, stackString+'(',result);
        // if countClosed < countOpen
        if(countClosed < countOpen)
            // call backtrack with closed paranthesis
            this.backtrack(n, countOpen, countClosed+1, stackString+')',result);
    }
}
