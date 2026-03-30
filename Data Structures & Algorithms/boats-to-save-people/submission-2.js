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
            if(start == end){
                count++;
                break;
            }
            let sum = people[start]+people[end];
            if( sum <= limit){
                count++;
                start++;
                end--;
            }
            else{
                count++;
                end--;
            }
        }
        return count;
    }

}