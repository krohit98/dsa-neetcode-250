class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let leftGridMap = {}, midGridMap = {}, rightGridMap = {};
        for(let i=0;i<9;i++){
            let rowFreqMap = {}, colFreqMap = {};
            if(i%3 == 0){
               leftGridMap = {}; midGridMap = {}; rightGridMap = {}; 
            }
            for(let j=0;j<9;j++){

                if(board[i][j] != '.'){
                    if(rowFreqMap[board[i][j]]) return false;
                    rowFreqMap[board[i][j]] = 1;

                    if(j<3){
                        if(leftGridMap[board[i][j]]) return false;
                        leftGridMap[board[i][j]] = 1;
                    }
                    else if(j<6){
                        if(midGridMap[board[i][j]]) return false;
                        midGridMap[board[i][j]] = 1;
                    }
                    else if(j<9){
                        if(rightGridMap[board[i][j]]) return false;
                        rightGridMap[board[i][j]] = 1;
                    }
                }
                
                if(board[j][i] != '.'){
                    if(colFreqMap[board[j][i]]) return false;
                    colFreqMap[board[j][i]] = 1;
                }
                
            }
        }
        return true;
    }
}
