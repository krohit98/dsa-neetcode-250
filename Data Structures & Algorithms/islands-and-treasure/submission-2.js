class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let q = new Queue();
        let visited = new Set();

        function addToQueue(r,c) {
            if(
                r < 0 || r >= grid.length || 
                c < 0 || c >= grid[r].length || 
                visited.has(`${r},${c}`) || 
                grid[r][c] === -1){
                    return;
            }
            visited.add(`${r},${c}`)
            q.push([r,c]);
        }

        for(let r=0; r<grid.length; r++){
            for(let c=0; c<grid[r].length; c++){
                if(grid[r][c] === 0) {
                    visited.add(`${r},${c}`)
                    q.push([r,c])
                }
            }
        }

        let dist = 0;

        while(q.size()) {
            let size = q.size();

            for(let i=0; i<size; i++) {
                let [r,c] = q.pop();
                grid[r][c] = dist;

                addToQueue(r+1,c)
                addToQueue(r-1,c)
                addToQueue(r,c+1)
                addToQueue(r,c-1)
            }

            dist += 1;
        }
    }
}
