class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // initialize start, charMap, charCount
        let start = 0, charMap = new Map(), charCount = 0;

        // run loop for length of s1
        for(let i=0;i<s1.length;i++){
            // add characters with count to charMap
            charMap.set(s1[i], (charMap.get(s1[i]) || 0) + 1);
        }

        // run loop from end = 0 to end < s2.length
        for(let end = 0; end < s2.length; end++){
            // if s2[end] exists in charMap
            if(charMap.has(s2[end])){
                // charCount++
                if(charMap.get(s2[end]) > 0) charCount++;
                charMap.set(s2[end], charMap.get(s2[end])-1)
            }

            // if window size > s1.length (slide window)
            if((end - start + 1) > s1.length){
                // if s2[start] exists in charMap
                if(charMap.has(s2[start])){
                    // charCount--
                    if(charMap.get(s2[start]) >= 0) charCount--;
                    charMap.set(s2[start], charMap.get(s2[start])+1);
                }
                // start++
                start++;
            }

            // if charCount is equal to s1.length
            if(charCount == s1.length)
                // return true
                return true;
        }

        // return false 
        return false;
    }
}
