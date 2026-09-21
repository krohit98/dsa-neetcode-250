class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;

        function calcIslandArea(r,c,islandArea) {

            if(r >= grid.length || r < 0 || c >= grid[r].length || c < 0) {
                return islandArea;
            }

            if(grid[r][c] !== 1) return islandArea;

            islandArea++;
            grid[r][c] = "#"

            islandArea = calcIslandArea(r,c+1,islandArea);
            islandArea = calcIslandArea(r+1,c,islandArea);
            islandArea = calcIslandArea(r,c-1,islandArea);
            islandArea = calcIslandArea(r-1,c,islandArea);

            return islandArea;
        }

        for(let i=0; i<grid.length; i++) {
            for(let j=0; j<grid[i].length; j++) {
                if(grid[i][j] === 1){
                    let islandArea = calcIslandArea(i,j,0)
                    maxArea = Math.max(maxArea, islandArea);
                }
            }
        }

        return maxArea;
    }
}
