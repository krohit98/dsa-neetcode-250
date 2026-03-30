class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // initialize length of rows and columns
        let rows = matrix.length;
        let columns = matrix[0].length;

        // initialize top(first row) and bottom(last row) pointer variables
        let top = 0, bottom = rows-1;

        // run loop while top <= bottom
        while(top <= bottom){
            // calculate middle row
            let mid = Math.ceil((top+bottom)/2);
            // if target < 1st element of middle row
            if(target < matrix[mid][0])
                // set bottom to middle-1th row
                bottom = mid-1;
            // else if target > last element of middle row
            else if(target > matrix[mid][columns-1])
                // set top to middle+1th row
                top = mid+1;
            // else exit the loop
            else break;
        }

        // if top > bottom return false
        if(top > bottom) return false;

        // calculate and initialize the middle row (row where target might exist) using top and bottom values
        let row = Math.ceil((top+bottom)/2);

        // initialize start (first element index) and end(last element index)
        let start = 0, end = columns-1;

        // run loop while start <= end
        while(start <= end){
            // calculate middle index
            let mid = Math.ceil((start+end)/2);
            // if target < element at middle
            if(target < matrix[row][mid])
                // set end to middle-1
                end = mid-1;
            // else if target > element at middle
            else if(target > matrix[row][mid])
                // set start to middle+1
                start = mid+1;
            // else (element found) return true
            else return true
        }
        
        // return false
        return false;

    }
}
