class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        let result = "";

        if((a == 0 && b == 0) || (a == 0 && c == 0) || (b == 0 && c == 0)) return result;

        let pq = new MaxPriorityQueue(char => char.freq);
        if(a > 0) pq.enqueue({char:'a', freq:a});
        if(b > 0) pq.enqueue({char:'b', freq:b});
        if(c > 0) pq.enqueue({char:'c', freq:c});

        let unavailableChar = null;
        let remainingFreq = {
            'a':a,
            'b':b,
            'c':c
        }

        while(pq.size()) {
            let top = pq.dequeue();
            if(top.freq >= Math.ceil((remainingFreq['a']+remainingFreq['b']+remainingFreq['c'])/2)
            && top.freq >= 2
            ) {
                result += top.char + top.char;
                top.freq -= 2;
            }
            else {
                result += top.char;
                top.freq--;
            }

            remainingFreq[top.char] = top.freq;

            if(unavailableChar) {
                pq.enqueue(unavailableChar);
                unavailableChar = null;
            }
            if(top.freq) unavailableChar = top;
        }

        return result;
    }
}
