class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        let rearranged = "";

        // create heap with max frequency prioritised
        let stringFreq = {};
        let maxFreq = 0;
        for(let i=0;i<s.length;i++){
            stringFreq[s[i]] = (stringFreq[s[i]] || 0) + 1;
            maxFreq = Math.max(maxFreq, stringFreq[s[i]])
        }

        // if the most frequent character occurs more than half the length of the string, the rearrangement is not possible
        if(maxFreq > Math.ceil(s.length/2)) return rearranged;

        let pq = new MaxPriorityQueue(char => char.freq);

        for(const [char, freq] of Object.entries(stringFreq)) {
            pq.enqueue({char, freq})
        }
        
        // loop while the heap is not empty
        // add the most frequent character to the result, reduce its frequency and make it unavailable
        // replace the last unavailable character with the recently used character
        // insert the last unavailable character back to heap to be reused
        let unavailableChar = null;

        while(pq.size()) {
            let top = pq.dequeue();
            rearranged += top.char;
            top.freq--;
            if(unavailableChar){
                pq.enqueue(unavailableChar);
                unavailableChar = null;
            }
            if(top.freq) unavailableChar = top;
        }

        return rearranged;
    }
}
