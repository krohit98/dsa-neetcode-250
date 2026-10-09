class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let gridMap = {};

        for(let r=0; r<9; r++) {
            let rowSet = new Set();
            let colSet = new Set();
            for(let c=0; c<9; c++) {
                if(rowSet.has(board[r][c])) return false;
                else if(board[r][c] !== '.') rowSet.add(board[r][c]);

                if(colSet.has(board[c][r])) return false;
                else if(board[c][r] !== '.') colSet.add(board[c][r]);

                let squareKey = `${Math.floor(r/3)},${Math.floor(c/3)}`

                if(!gridMap[squareKey]) {
                    gridMap[squareKey] = new Set();
                }

                if(gridMap[squareKey].has(board[r][c])) return false
                else if(board[r][c] !== '.') gridMap[squareKey].add(board[r][c])
            }
        }

        return true;
    }
}
