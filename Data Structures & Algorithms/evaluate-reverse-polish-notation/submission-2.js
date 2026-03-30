class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // if token.length == 1, return 1st element from tokens
        if(tokens.length == 1) return tokens[0];

        // initialize empty stack
        let stack = [];

        // run a loop from i=0 to i<tokens.length
        for(let i=0;i<tokens.length;i++){
            // if tokens[i] is an operator
            if(tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/'){
                // pop top 2 elements from stack and store in variables
                let op2 = stack.pop();
                let op1 = stack.pop();
                // calculate the solution using the operator and push in stack
                switch(tokens[i]){
                    case '+':
                        stack.push(parseInt(op1) + parseInt(op2));
                        break;
                    case '-':
                        stack.push(parseInt(op1) - parseInt(op2));
                        break;
                    case '*':
                        stack.push(parseInt(op1) * parseInt(op2));
                        break;
                    case '/':
                        stack.push(Math.trunc(parseInt(op1) / parseInt(op2)));
                        break;
                }
            }
            // else (not an operator)
            else
                // push tokens[i] to stack
                stack.push(tokens[i]);
        }

        // return top element from stack
        return stack[stack.length - 1];
    }
}
