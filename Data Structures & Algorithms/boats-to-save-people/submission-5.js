class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let count = 0;
        people.sort((a,b)=>a-b); // 1,2,2,3,3 // 1,2,4,5 // 3,3,4,5
        let start = 0;
        let end = people.length-1;
        while(start <= end){
            let weightSum = people[start]+people[end];
            if( weightSum <= limit){
                start++;
            }
            end--;
            count++;
        }
        return count;
    }

}