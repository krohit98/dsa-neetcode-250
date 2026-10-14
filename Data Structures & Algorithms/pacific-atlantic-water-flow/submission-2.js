class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let result = [];

        let grid = new Array(heights.length);
        for(let i=0; i<heights.length; i++) {
            grid[i] = new Array(heights[0].length).fill('');
        }

        function dfs(r,c,marker,prev = Number.MIN_SAFE_INTEGER) {

            if(r < 0 || c < 0 || r >= heights.length || c >= heights[0].length || heights[r][c] < prev || grid[r][c].includes(marker)) return;

            grid[r][c] += marker;

            dfs(r,c+1,marker,heights[r][c])
            dfs(r+1,c,marker,heights[r][c])
            dfs(r,c-1,marker,heights[r][c])
            dfs(r-1,c,marker,heights[r][c])
        }

        let r=0;
        let c=0;

        while(c < heights[r].length) {
            dfs(r,c,'P');
            c++;
        }

        c=0;
        while(r < heights.length) {
            dfs(r,c,'P');
            r++;
        }

        r=heights.length-1;

        while(c < heights[r].length) {
            dfs(r,c,'A');
            c++;
        }

        c--;

        while(r >= 0) {
            dfs(r,c,'A');
            r--;
        }

        for(let i=0; i<grid.length; i++) {
            for(let j=0; j<grid[i].length; j++) {
                if(grid[i][j] == 'PA') {
                    result.push([i,j]);
                }
            }
        }

        return result;
    }
}
