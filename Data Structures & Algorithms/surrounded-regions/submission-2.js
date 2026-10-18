class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        // Multi Source BFS
        let q = new Queue();

        function addToQueue(r,c) {
            if (r < 0 || c < 0
            || r >= board.length
            || c >= board[0].length
            || board[r][c] != 'O') return;

            board[r][c] = 'R';
            q.push([r,c]);
        }

        // capture all O cells on edges
        for(let r=0; r<board.length; r++) {
            if(board[r][0] === 'O') {
                board[r][0] = 'R';
                q.push([r,0]);
            }
            if(board[r][board[0].length-1] === 'O') {
                board[r][board[0].length-1] = 'R';
                q.push([r,board[0].length-1]);
            }
        }

        for(let c=0; c<board[0].length; c++) {
            if(board[0][c] === 'O') {
                board[0][c] = 'R';
                q.push([0,c]);
            }
            if(board[board.length-1][c] === 'O') {
                board[board.length-1][c] = 'R';
                q.push([board.length-1, c]);
            }
        }

        // Multi source BFS to mark all surrounded regions
        while(q.size()) {
            let [r,c] = q.pop();
            addToQueue(r,c+1);
            addToQueue(r+1,c);
            addToQueue(r,c-1);
            addToQueue(r-1,c);
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
