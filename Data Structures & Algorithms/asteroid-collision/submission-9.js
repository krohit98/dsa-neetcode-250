class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];
        for(let i=0;i<asteroids.length;i++){
            if(asteroids[i]<0){
                let alive = true;
                while(stack.length>0){
                    let top = stack[stack.length-1];
                    if(top < 0) break;

                    if(top + asteroids[i] > 0){
                        alive = false;
                        break;
                    }
                    else if(top + asteroids[i] == 0){
                        stack.pop();
                        alive = false;
                        break;
                    }
                    else stack.pop();
                }
                if(alive) stack.push(asteroids[i]);
            }
            else stack.push(asteroids[i]);
        }
        return stack;
    }
}
