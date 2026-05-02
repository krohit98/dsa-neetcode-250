class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let maxWeight = 0; 
        let weightSum = 0;
        for(let i=0;i<weights.length;i++){
            weightSum+=weights[i];
            maxWeight = Math.max(maxWeight, weights[i]);
        }

        let start = maxWeight, end = weightSum;
        let capacity = 1;

        while(start <= end){
            let mid = Math.floor((start+end)/2);
            let dayCount = 1, shipped = 0;
            for(let i=0;i<weights.length;i++){
                if(shipped+weights[i]<=mid){
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
