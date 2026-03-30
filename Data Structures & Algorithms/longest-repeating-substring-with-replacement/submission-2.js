class Solution {

    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // BRUTE FORCE

        // init result to 1
        let result = 1;
        // run loop from i=0 to i<s.length
        for(let i=0;i<s.length;i++){
            // init freqMap to new empty object
            let freqMap = {};
            // run loop from j=i to j<s.length
            for(let j=i;j<s.length;j++){
                // increment freqMap[s[j]] by 1
                freqMap[s[j]] = freqMap[s[j]] ? freqMap[s[j]]+1 : 1;
                // init maxFreq to return value from getMaxFrequency
                let maxFreq = this.getMaxFreq(freqMap);
                // if window length - maxFreq <= k
                if((j-i+1) - maxFreq <= k){
                    // set result to max of result, window length
                    result = Math.max(result, j-i+1);
                }
                // else break inner loop
                else break;
            }
        }
        // return result
        return result;
    }

    getMaxFreq(freqMap){
        // init maxFreq to 0
        let maxFreq = 0;
        // loop over the freqMap keys
        Object.keys(freqMap).map(char => {
            // set maxFreq to max of maxFreq, freqMap[char]
            maxFreq = Math.max(maxFreq, freqMap[char]);
        })
        
        // return maxFreq
        return maxFreq;
    }
}
