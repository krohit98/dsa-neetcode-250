class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // declare an object with closing brackets mapped to opening brackets
        const brackets = {
            ')':'(',
            ']':'[',
            '}':'{'
        }

        // initialize an empty stack
        const stack = [];
        // run a loop from i=0 to i<s.length
        for(let i=0;i<s.length;i++){
            // if top of stack is equal to map[s[i]]
            if(stack.length > 0 && brackets[s[i]] == stack[stack.length - 1]){
                // pop from stack
                stack.pop();
            }
            // else
            else{
                // push s[i] to stack
                stack.push(s[i]);
            }
        }
        // if stack is empty return true
        if(stack.length == 0) return true;
        // else return false
        return false;
    }
}
