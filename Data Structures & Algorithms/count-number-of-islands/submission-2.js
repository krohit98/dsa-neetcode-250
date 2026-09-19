class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islandCount = 0;

        function findIsland(r,c){
            if(r >= grid.length || r < 0 || c >= grid[r].length || c < 0){
                return;
            }

            if(grid[r][c] == "1") {
                grid[r][c] = "#"

                findIsland(r,c+1);
                findIsland(r+1,c);
                findIsland(r,c-1);
                findIsland(r-1,c);
            }
        }

        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[i].length;j++){
                if(grid[i][j] == "1") {
                    islandCount++;
                    findIsland(i,j)
                }
            }
        }

        return islandCount;
    }
}
