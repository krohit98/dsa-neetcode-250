class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // iterate over position array and replace position with [position, speed]
        for(let i=0;i<position.length;i++){
            position[i] = [position[i],speed[i]];
        }

        // sort the updated array
        position.sort((a,b) => b[0] - a[0])

        // loop over the updated array, calculate the time it takes to reach target 
        // and replace array element with calculated time to create time array
        for(let i=0;i<position.length;i++){
            let time = (target - position[i][0]) / position[i][1];
            position[i] = time;
        }
        let timeArray = position; // shallow copy, doesnt use extra space

        // initialize stack, count
        let stack = [], count = 0;

        // push first element of time array into stack
        stack.push(timeArray[0]);

        // loop over the updated array from 1st index
        for(let i=1;i<timeArray.length;i++){
            // if current element > stack top
            if(timeArray[i] > stack[stack.length - 1]){
                // pop from stack
                stack.pop();
                // increment count
                count++;
                // push current element to stack
                stack.push(timeArray[i]);
            }
        }

        if(stack.length == 1) count++;

        // return count
        return count;
    }
}
