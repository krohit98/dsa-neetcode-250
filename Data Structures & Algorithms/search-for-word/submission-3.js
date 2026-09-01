class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let found = false;
        function backtrack(r, c, index) {

            if(index >= word.length || r >= board.length || c >= board[0].length) return;

            if(board[r][c] == word[index]) {
                if(index == word.length-1) {
                    found = true;
                }
                else {
                    board[r][c] = '#';
                    if(c < board[0].length-1) backtrack(r,c+1,index+1)
                    if(r < board.length-1) backtrack(r+1,c,index+1)
                    if(c > 0) backtrack(r,c-1,index+1)
                    if(r > 0) backtrack(r-1,c,index+1)

                    board[r][c] = word[index]
                }
            }
            return found;
        }

        for(let r=0; r<board.length; r++) {
            for(let c=0; c<board[0].length; c++) {
                let found = backtrack(r,c,0);
                if(found) return true;
            }
        }

        return false;
    }
}
