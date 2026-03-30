class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // BRUTE FORCE

        // if s2.length < s1.length, return false
        if(s2.length < s1.length) return false;

        // init s1Array to new Array of 26 elements filled with 0
        let s1Array = new Array(26).fill(0);

        // run loop from i=0 to i<s1.length
        for(let i=0;i<s1.length;i++){
            // increment s1Array[integer value of s1[i]] by 1;
            s1Array[s1.charCodeAt(i)-97]++;
        }

        // run loop from i=0 to i<s2.length-s1.length
        for(let i=0;i<=s2.length-s1.length;i++){
            // init s2Array of 26 elements filled with 0
            let s2Array = new Array(26).fill(0);
            // run loop from j=i to j<i+s1.length
            for(let j=i;j<i+s1.length;j++){
                // increment s2Array[integer value of s2[j]] by 1
                s2Array[s2.charCodeAt(j)-97]++;
            }
            // if string of s1Array equals string of s2Array
            if(s1Array.join('') === s2Array.join('')){
                // return true
                return true;
            }
        }

        // return false
        return false;
    }
}
