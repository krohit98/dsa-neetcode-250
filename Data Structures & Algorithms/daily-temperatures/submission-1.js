class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // initialize empty stack and result array
        let stack = [], resultArray = new Array(temperatures.length).fill(0);

        // run loop from i=0 to i<temperatures.length
        for(let i=0;i<temperatures.length;i++){
            // while top of stack is less than temperatures[i]
            while(stack.length>0 && stack[stack.length - 1][0] < temperatures[i]){
                // pop from top of stack
                let popped = stack.pop();
                // calculate difference between indexes
                let difference = i - popped[1];
                // push to result array at popped index
                resultArray[popped[1]] = difference;
            }
            // push temperatures[i] to top of stack
            stack.push([temperatures[i],i]);
        }

        // return result array
        return resultArray;
    }
}
