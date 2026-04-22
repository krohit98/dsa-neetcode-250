class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = [];
        path+='/';
        let str = '';

        for(let i=0;i<path.length;i++){
            if(path[i] == '/'){
                if(str == '..'){
                    stack.pop();
                }
                else if(str && str != '.'){
                    stack.push(str);
                }
                str='';
            }
            else str+=path[i];
        }
        return '/' + stack.join('/');
    }
}
