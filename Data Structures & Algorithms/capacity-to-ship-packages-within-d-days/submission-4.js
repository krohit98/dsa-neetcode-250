class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let sum = 0;
        let maxWeight = 0;
        for(let i=0;i<weights.length;i++){
            maxWeight = Math.max(maxWeight, weights[i]);
            sum+=weights[i];
        }
        let capacity = maxWeight;
        let start = maxWeight, end = sum;
        while(start <= end){
            let mid = Math.floor((start+end)/2);
            let shipped = 0, dayCount = 1;
            for(let i=0;i<weights.length;i++){
                if(shipped+weights[i] <= mid){
                    shipped+=weights[i];
                }
                else{
                    dayCount++;
                    shipped = weights[i];
                }
            }
            if(dayCount <= days){
                capacity = mid;
                end = mid-1;
            }
            else start = mid+1;
        }
        return capacity;
    }
}
