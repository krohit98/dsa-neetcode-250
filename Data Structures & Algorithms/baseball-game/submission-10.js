class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        // STACK
        let record = [];
        for(let i=0;i<operations.length;i++){
            if(operations[i] == '+'){
                record.push(record[record.length-1]+record[record.length-2]);
            }
            else if(operations[i] == 'C'){
                record.pop();
            }
            else if(operations[i] == 'D'){
                record.push(record[record.length-1] * 2)
            }
            else{
                record.push(Number(operations[i]));
            }
        }
        return record.reduce((total,i) => {
            return total+i;
        },0)
    }
}
