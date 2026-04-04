class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = [];
        for(let row=0;row<matrix.length;row++){
            let rowSumArray = [];
            for(let col=0;col<matrix[row].length;col++){
                if(col > 0){
                    rowSumArray.push(matrix[row][col]+rowSumArray[col-1])
                }
                else rowSumArray.push(matrix[row][col])
            }
            this.matrix.push(rowSumArray);
        }
        console.log(this.matrix);
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let sum = 0;
        for(let row = row1; row <= row2; row++){
            sum+=this.matrix[row][col2] - (col1 > 0 ? this.matrix[row][col1-1] : 0);
        }
        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
