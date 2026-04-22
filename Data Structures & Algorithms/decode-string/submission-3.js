class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];
        for(let i=0;i<s.length;i++){
            if(s[i] == ']'){
                let str = '';
                while(stack[stack.length-1] !== '['){
                    str = stack.pop() + str;
                }
                stack.pop();
                let num = stack.pop();
                while(num--){
                    stack.push(str);
                }
            }
            else{
                let num = '';
                while(!isNaN(s[i])){
                    num+=s[i];
                    i++;
                }
                if(num) stack.push(Number(num));
                stack.push(s[i]);
            }
        }
        return stack.join('');
    }
}
