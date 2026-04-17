class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // init stack to empty array
        let stack = [];
        // init result to array of size temperatures.length
        let result = new Array(temperatures.length).fill(0);

        // run loop from i=0 to i<temperatures.length
        for(let i=0;i<temperatures.length;i++){
            // run loop while stack is not empty and temperatures[i] is greater than the temp value at top of stack
            while(stack.length>0 && temperatures[i] > stack[stack.length-1][0]){
                // pop top of stack
                let popped = stack.pop();
                // insert i-popped[1] at result[popped[1]]
                result[popped[1]] = i-popped[1];
            }
            // push [temperatures[i],i] to stack 
            stack.push([temperatures[i],i]);
        }
        // return result
        return result;
    }
}
