class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // SLIDING WINDOW

        // if s2.length < s1.length, return false
        if(s2.length < s1.length) return false;

        // init winStart and winEnd to 0;
        let winStart = 0;
        let winEnd = 0;

        // init s1Array and s2Array to new Array of 26 elements filled with 0
        let s1Array = new Array(26).fill(0);
        let s2Array = new Array(26).fill(0);

        // run loop while winEnd < s1.length
        while(winEnd < s1.length){
            // increment s1Array[integer value of s1[i]] by 1;
            s1Array[s1.charCodeAt(winEnd)-97]++;
            s2Array[s2.charCodeAt(winEnd)-97]++;
            // increment winEnd
            winEnd++;
        } 

        // run loop while winEnd < s2.length
        while(winEnd <= s2.length){
            
            // if string of s1Array equals string of s2Array
            if(s1Array.join('') === s2Array.join('')){
                // return true
                return true;
            }
            // increment s2Array[integer value of s2[winEnd]] by 1, then increment winEnd
            s2Array[s2.charCodeAt(winEnd++)-97]++;
            // decrement s2Array[integer value of s2[winStart]] by 1, then increment winStart
            s2Array[s2.charCodeAt(winStart++)-97]--;
        }

        // return false
        return false;
    }
}
