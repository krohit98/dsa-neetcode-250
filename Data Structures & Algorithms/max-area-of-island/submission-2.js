class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;

        function calcIslandArea(r,c) {

            if(r >= grid.length || r < 0 || c >= grid[r].length || c < 0) {
                return 0;
            }

            if(grid[r][c] !== 1) return 0;

            grid[r][c] = "#"

            return (1 + 
            calcIslandArea(r,c+1) +
            calcIslandArea(r+1,c) +
            calcIslandArea(r,c-1) +
            calcIslandArea(r-1,c) )
        }

        for(let i=0; i<grid.length; i++) {
            for(let j=0; j<grid[i].length; j++) {
                if(grid[i][j] === 1){
                    maxArea = Math.max(maxArea, calcIslandArea(i,j));
                }
            }
        }

        return maxArea;
    }
}
