class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        for(let i=0;i<position.length;i++){
            position[i] = [position[i],speed[i]];
        }
        position.sort((a,b)=>b[0]-a[0]);

        let stack = [];
        for(let i=0;i<position.length;i++){
            let pos = position[i][0];
            let speed = position[i][1];
            let steps = ((target-pos)/speed);
            if(stack.length <= 0 || stack[stack.length-1]<steps){
                stack.push(steps);
            }
        }
        return stack.length;
    }
}
