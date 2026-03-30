class Solution {

    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // SLIDING WINDOW

        // init result to 1
        let result = 1;
        // init winStart and maxFreq to 0
        let winStart = 0;
        let maxFreq = 0;
        // init freqMap to empty object
        let freqMap = {};

        // run loop from winEnd = 0 to winEnd<s.length
        for(let winEnd = 0; winEnd<s.length; winEnd++){
            // increment freqMap[s[winEnd]] by 1
            freqMap[s[winEnd]] = freqMap[s[winEnd]] ? freqMap[s[winEnd]]+1 : 1;
            // set maxFreq to return value from getMaxFreq
            maxFreq = this.getMaxFreq(freqMap);
            // run loop while window length - maxFreq > k
            while((winEnd-winStart+1) - maxFreq > k){
                // decrement freqMap[s[winStart]] by 1
                freqMap[s[winStart]] = freqMap[s[winStart]]-1;
                // increment winStart by 1
                winStart++;
                // set maxFreq to return value from getMaxFreq
                maxFreq = this.getMaxFreq(freqMap);
            }
            // set result equal to max on result, window length
            result = Math.max(result, winEnd-winStart+1);
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
