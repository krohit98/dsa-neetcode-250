class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {

        // map to mark visited digits
        unordered_map<char, bool> digits;
        for(int i=1;i<=9;i++) digits[i+'0'] = false;

        // check duplicates in rows
        for(int i=0;i<9;i++){
            for(int j=0;j<9;j++){
                if(digits[board[i][j]]) return false;
                if(board[i][j]!='.') digits[board[i][j]] = true;
            }
            // reset map
            for(int i=1;i<=9;i++) digits[i+'0'] = false;
        }


        // check duplicates in columns
        for(int i=0;i<9;i++){
            for(int j=0;j<9;j++){
                if(digits[board[j][i]]) return false;
                if(board[j][i]!='.') digits[board[j][i]] = true;
            }
            // reset map
            for(int i=1;i<=9;i++) digits[i+'0'] = false;
        }

        for(int k=0;k<=6;k+=3){
            for(int h=0;h<=6;h+=3){
                for(int i=0+k;i<3+k;i++){
                    for(int j=0+h;j<3+h;j++){
                        if(digits[board[i][j]]) return false;
                        if(board[i][j]!='.') digits[board[i][j]] = true;
                    }
                }
            // reset map
            for(int i=1;i<=9;i++) digits[i+'0'] = false;
            }
        }

        return true;
    }
};
