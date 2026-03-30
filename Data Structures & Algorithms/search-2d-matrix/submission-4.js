class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let colLength = matrix.length;
        let colStart = 0, colEnd = colLength - 1;
        while(colStart<=colEnd){
            let col = Math.floor((colStart+colEnd)/2);
            console.log(col)
            if(matrix[col][0] == target) return true;
            else if(col == colLength-1 || (col+1 < colLength && matrix[col][0] < target && matrix[col+1][0] > target)){
                let rowLength = matrix[col].length;
                let rowStart = 0, rowEnd = rowLength-1;
                while(rowStart<=rowEnd){
                    let row = Math.ceil((rowStart+rowEnd)/2);
                    if(matrix[col][row] == target) return true;
                    else if(matrix[col][row] < target) rowStart = row+1;
                    else rowEnd = row-1;
                }
                return false;
            }
            else if(matrix[col][0] > target) colEnd = col-1;
            else colStart = col+1;
        }
        return false;
    }
}
