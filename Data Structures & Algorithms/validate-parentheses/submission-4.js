class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for(let i=0;i<s.length;i++){
            switch(s[i]){
                case ')':
                    if(stack[stack.length-1] == '(') stack.pop();
                    else return false;
                    break;
                case '}':
                    if(stack[stack.length-1] == '{') stack.pop();
                    else return false;
                    break;
                case ']':
                    if(stack[stack.length-1] == '[') stack.pop();
                    else return false;
                    break;
                default:
                    stack.push(s[i])
            }
        }
        return stack.length == 0 ? true : false;
    }
}
