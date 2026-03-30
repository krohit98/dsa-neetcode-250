class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    // define function to calculate time to eat all bananas with a choosen k
    getTimeToEat(piles, k){
        // initialize hours variable to 0
        let hours = 0;
        // run loop through piles
        for(let i=0;i<piles.length;i++){
            // add ceiling value of piles[i]/k to hours
            hours += Math.ceil(piles[i]/k);
        }
        // return hours
        return hours;
    }

    minEatingSpeed(piles, h) {
        // calculate max pile from piles
        let maxPile = Math.max(...piles);

        // initialize start and end pointer variables
        let start = 1, end = maxPile;

        //initialize minK variable
        let minK = end;

        // run loop while start <= end
        while(start <= end){
            // calculate mid
            let mid = Math.ceil((start+end)/2);
            // calculate time to eat all bananas using value at mid as k
            let timeToEat = this.getTimeToEat(piles, mid);
            // if time to eat > h
            if(timeToEat > h)
                // set start to mid+1 (increase k)
                start = mid+1;
            // else if time to eat <= h
            else if(timeToEat <= h){
                // set minK to mid
                minK = mid;
                // set end to mid-1 (decrease k)
                end = mid-1;
            }
        }

        // return minK
        return minK;
    }
}
