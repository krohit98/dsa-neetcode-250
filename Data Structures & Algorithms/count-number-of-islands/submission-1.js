class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islandCount = 0;

        function markVisitedRecursively(r,c) {
            if(r >= grid.length || r < 0 || c >= grid[r].length || c < 0){
                return;
            }

            if(grid[r][c] == "1") {
                grid[r][c] = "#"

                markVisitedRecursively(r,c+1);
                markVisitedRecursively(r+1,c);
                markVisitedRecursively(r,c-1);
                markVisitedRecursively(r-1,c);
            }
        }

        function findIsland(r,c){
            if(grid[r][c] !== "1") {
                return;
            }

            islandCount++;
            markVisitedRecursively(r,c)
        }

        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[i].length;j++){
                findIsland(i,j)
            }
        }

        return islandCount;
    }
}
