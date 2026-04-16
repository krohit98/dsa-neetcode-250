class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];
        for(let i=0;i<asteroids.length;i++){
            if(stack.length < 1) stack.push(asteroids[i]);
            else{
                while(this.willCollide(this.top(stack), asteroids[i]) && Math.abs(asteroids[i]) > Math.abs(stack[stack.length-1]) && stack.length > 0){
                    stack.pop();
                }
                if(this.willCollide(this.top(stack), asteroids[i]) && Math.abs(asteroids[i]) == Math.abs(stack[stack.length-1])){
                    stack.pop();
                }
                else if(stack.length == 0 || !this.willCollide(this.top(stack), asteroids[i])){
                    stack.push(asteroids[i]);
                }
            }
        }
        return stack;
    }

    top(stack){
        return stack[stack.length-1];
    }

    willCollide(top, incoming){
        return (top > 0 && incoming < 0);
    }
}
