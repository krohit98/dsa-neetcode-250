class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0, end = matrix.length-1;
        let row = 0;
        while(start <= end){
            let mid = Math.floor((start+end)/2);
            if(matrix[mid][0] == target) return true;
            else if(matrix[mid][0] < target){
                row = mid;
                start = mid+1;
            }
            else end = mid-1;
        }

        start = 0;
        end = matrix[row].length-1;

        while(start <= end){
            let mid = Math.floor((start+end)/2);
            if(matrix[row][mid] == target) return true;
            else if(matrix[row][mid] > target) end = mid-1;
            else start = mid+1;
        }
        return false;
    }
}
