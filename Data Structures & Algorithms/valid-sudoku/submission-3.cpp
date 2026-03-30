class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        unordered_map<int, unordered_set<char>> row;
        unordered_map<int, unordered_set<char>> col;
        unordered_map<int, unordered_set<char>> square;

        for(int r=0;r<9;r++){
            for(int c=0;c<9;c++){
                char cell = board[r][c];

                if(cell == '.') continue;
                int key = (r/3) * 3 + (c/3);

                if(row[r].count(cell) || col[c].count(cell) || square[key].count(cell))
                    return false;
                
                row[r].insert(cell);
                col[c].insert(cell);
                square[key].insert(cell);
            }
        }

        return true;
    }
};
