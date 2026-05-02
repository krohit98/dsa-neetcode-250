class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxPile = Math.max(...piles);
        let start = 1, end = maxPile;
        let result = 1;
        while(start <= end){
            let mid = Math.floor((start+end)/2);
            let timeToEat = 0;
            for(let i=0;i<piles.length;i++){
                timeToEat+=Math.ceil(piles[i]/mid);
            }
            if(timeToEat<=h){
                result = mid;
                end = mid-1;
            }
            else start = mid+1;
        }
        return result;
    }
}
