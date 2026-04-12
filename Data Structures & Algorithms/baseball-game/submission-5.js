class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        // BRUTE FORCE
        let record = [];
        for(let i=0;i<operations.length;i++){
            if(operations[i] == '+'){
                record.push(Number(record[record.length-1])+Number(record[record.length-2]));
            }
            else if(operations[i] == 'C'){
                record.pop();
            }
            else if(operations[i] == 'D'){
                record.push(record[record.length-1] * 2)
            }
            else{
                record.push(operations[i]);
            }
        }
        return record.reduce((total,i) => {
            return total+Number(i);
        },0)
    }
}
