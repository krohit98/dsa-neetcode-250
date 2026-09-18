class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function backtrack(index, r, c) {
            
            if(index == word.length) {
                return true;
            }

            if(r >= board.length  || r < 0 || c >= board[r].length || c < 0) {
                return false;
            }

            console.log(board[r][c])

            if(board[r][c] == word[index]) {
                board[r][c] = '#';
                let found =  (
                    backtrack(index+1, r, c+1) || 
                    backtrack(index+1, r+1, c) ||
                    backtrack(index+1, r, c-1) || 
                    backtrack(index+1, r-1, c)
                )
                board[r][c] = word[index];
                if(found) return true;
            }

            return false;
        }

        for(let i=0; i<board.length; i++) {
            for(let j=0; j<board[i].length; j++) {
                if(backtrack(0,i,j)) {
                    return true;
                }
            }
        }

        return false;
    }
}
