class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        // Multi source BFS
        let q = new Queue();
        let fresh = 0;
        
        function addToQueue(r,c) {
            if(r < 0 || r >= grid.length ||
                c < 0 || c >= grid[r].length ||
                grid[r][c] === 0 || grid[r][c] === 2
            ) {
                return
            }
            q.push([r,c]);
            grid[r][c] = 2;
            fresh--;
        }

        for(let r=0; r<grid.length; r++) {
            for(let c=0; c<grid[r].length; c++) {
                if(grid[r][c] === 2) {
                    q.push([r,c]);
                }
                else if(grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        console.log(q, grid)

        let min = 0;
        while(q.size() && fresh > 0) {
            let size = q.size();
            for(let i=0; i<size; i++) {
                let [r,c] = q.pop();
                addToQueue(r+1,c);
                addToQueue(r-1,c);
                addToQueue(r,c+1);
                addToQueue(r,c-1);
            }

            min++;
        }

        return fresh > 0 ? -1 : min;
    }
}
