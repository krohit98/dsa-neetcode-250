class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i=0;i<tokens.length;i++){
            let op1, op2;
            switch(tokens[i]){
                case '+':
                    op1 = stack.pop();
                    op2 = stack.pop();
                    stack.push(op1+op2);
                    break;
                case '-':
                    op1 = stack.pop();
                    op2 = stack.pop();
                    stack.push(op2-op1);
                    break;
                case '*':
                    op1 = stack.pop();
                    op2 = stack.pop();
                    stack.push(op1*op2);
                    break;
                case '/':
                    op1 = stack.pop();
                    op2 = stack.pop();
                    stack.push(parseInt(op2/op1));
                    break;
                default:
                    stack.push(Number(tokens[i]));
            }
        }
        return stack.pop();
    }
}
