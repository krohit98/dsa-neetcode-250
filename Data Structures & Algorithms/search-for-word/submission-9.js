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

            if(r < 0 || c < 0 || r >= board.length || c >= board[0].length) {
                return false;
            }

            if(word[index] == board[r][c]) {
                board[r][c] = "#"
                let found = backtrack(index+1, r, c+1) ||
                backtrack(index+1, r+1, c) ||
                backtrack(index+1, r, c-1) ||
                backtrack(index+1, r-1, c)

                if(found) return true;
                board[r][c] = word[index];
            }

            return false;
        }

        for(let i=0;i<board.length;i++) {
            for(let j=0;j<board[i].length;j++) {
                if(backtrack(0,i,j)) return true;
            }
        }
        return false;
    }
}
