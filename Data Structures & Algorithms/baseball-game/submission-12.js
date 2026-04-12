class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        // STACK - Optimal        
        let record = [];
        let total = 0;
        for(let i=0;i<operations.length;i++){
            if(operations[i] == '+'){
                let sum = record[record.length-1]+record[record.length-2]
                record.push(sum);
                total+=sum;
            }
            else if(operations[i] == 'C'){
                let top = record.pop();
                total-=top;
            }
            else if(operations[i] == 'D'){
                let double = record[record.length-1] * 2
                record.push(double);
                total+=double;
            }
            else{
                let num = Number(operations[i])
                record.push(num);
                total+=num;
            }
        }
        return total
    }
}
