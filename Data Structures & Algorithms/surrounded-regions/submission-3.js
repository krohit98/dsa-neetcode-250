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
            addToQueue(r,0);
            addToQueue(r,board[0].length-1);
        }

        for(let c=0; c<board[0].length; c++) {
            addToQueue(0,c);
            addToQueue(board.length-1,c);
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
