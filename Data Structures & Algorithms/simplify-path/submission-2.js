class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = ['/'];
        path+='/';
        let str = '';

        for(let i=0;i<path.length;i++){
            if(path[i] == '/'){
                if(str == '..'){
                    stack.pop();
                    stack.pop();
                }
                else if(str && str != '.'){
                    stack.push(str);
                    stack.push('/');
                }
                if(!stack.length) stack.push('/')
                str='';
            }
            else str+=path[i];
        }
        stack.pop();
        return stack.length > 0 ? stack.join('') : '/';
    }
}
