class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        // Multi Source BFS
        let q = new Queue();

        // capture all O cells on edges
        let r=0,c=0;
        while(c<board[r].length) {
            if(board[r][c] == 'O') q.push([r,c]);
            c++;
        }
        c--;
        while(r<board.length) {
            if(board[r][c] == 'O') q.push([r,c]);
            r++;
        }
        r--;
        while(c>=0) {
            if(board[r][c] == 'O') q.push([r,c]);
            c--;
        }
        c++;
         while(r>=0) {
            if(board[r][c] == 'O') q.push([r,c]);
            r--;
        }

        // Multi source BFS to mark all surrounded regions
        while(q.size()) {
            let size = q.size();
            for(let i=0;i<size;i++) {
                let [r,c] = q.pop();
                board[r][c] = 'R'
                if(c+1 < board[r].length && board[r][c+1] == 'O') q.push([r,c+1])
                if(r+1 < board.length && board[r+1][c] == 'O') q.push([r+1,c])
                if(c-1 >= 0 && board[r][c-1] == 'O') q.push([r,c-1])
                if(r-1 >= 0 && board[r-1][c] == 'O') q.push([r-1,c])
            }
        }

        // replace all un surrounded O cells with X and all R cells with O
        for(let i=0;i<board.length;i++) {
            for(let j=0;j<board[i].length;j++) {
                if(board[i][j] == 'O')
                    board[i][j] = 'X'
                else if(board[i][j] == 'R')
                    board[i][j] = 'O'
            }
        }
    }
}
