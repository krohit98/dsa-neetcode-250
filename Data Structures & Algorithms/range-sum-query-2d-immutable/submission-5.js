class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = [];
        for(let row=0;row<matrix.length;row++){
            let rowSumArray = [];
            let gridSumArray = [];
            for(let col=0;col<matrix[row].length;col++){
                let sum = 0;
                if(col > 0){
                    sum = matrix[row][col]+rowSumArray[col-1];
                }
                else sum = matrix[row][col];
                rowSumArray.push(sum);
                if(row > 0){
                    sum += this.matrix[row-1][col];
                }
                gridSumArray.push(sum);
            }
            this.matrix.push(gridSumArray);
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
        let total = this.matrix[row2][col2];
        let top = row1 > 0 ? this.matrix[row1-1][col2] : 0;
        let left = col1 > 0 ? this.matrix[row2][col1-1] : 0;
        let topLeft = row1 > 0 && col1 > 0 ? this.matrix[row1-1][col1-1] : 0;
        return total - top - left + topLeft;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
