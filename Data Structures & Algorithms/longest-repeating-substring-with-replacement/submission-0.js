class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        // initialize start pointer, result variable, maxCount and charMap;
        let start = 0, longest = 0, maxCount = 0, charMap = new Map();

        // run loop from end = 0 to end < n
        for(let end = 0; end < s.length; end++){
            // add s[end] to charMap
            charMap.set(s[end], (charMap.get(s[end]) || 0)+1);
            // calculate maxCount as maximum of maxCount or count of s[end] in map
            maxCount = Math.max(maxCount, charMap.get(s[end]));
            /*
                NOTE
                We use if statement to check the below condition and slide the window 
                instead of a while loop (as used is other sliding window problems like 
                longest subarray with sum k). If statement works here and while loop is 
                not required (even though that will work as well) because in this problem, 
                we are considering the count (frequency) of characters and not the character 
                values itself. In the outer loop, the count can only increase by 1, thus, 
                the below condition value can only increase upto k+1 at any given point.

                In other problems, since we consider the character values, we cannot be sure
                as to how much the increment/decrement can be and thus while loop is required
                to reach the required condition.
            */
            // if window size - maxCount (other character count) > k (slide window)
            if(((end-start+1) - maxCount) > k){
                // reduce count of s[start] from charMap
                charMap.set(s[start], charMap.get(s[start])-1);
                // increment start by 1
                start++;
            }
            // set result variable to maximum of result or window size (end-start+1)
            longest = Math.max(longest, end-start+1);
        }

        // return result
        return longest;
    }
}
