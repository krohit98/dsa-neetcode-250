class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a,b)=>a-b);
        let start = 1, end = piles[piles.length-1];
        let speed = 1;
        while(start<=end){
            let mid = Math.floor((start+end)/2);
            let total = 0;
            for(let i=0;i<piles.length;i++){
                total+=Math.ceil(piles[i]/mid);
            }
            if(total > h) start=mid+1;
            else{
                speed = mid;
                end = mid-1;
            }
        }
        return speed;
    }
}
