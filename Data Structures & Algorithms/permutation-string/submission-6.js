class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // initialize array1 and array2, size = 26, all chars = 0
        let array1 = new Array(26).fill(0);
        let array2 = new Array(26).fill(0);
        // run loop from i=0 to i=s1.length-1, i+=1
        for(let i=0;i<s1.length;i++)
            // update array1 at s1.charCodeAt[i]-97 to 1
            array1[s1.charCodeAt(i)-97] += 1;
        console.log("array1", array1)
        // initialize start and end to 0
        let start = 0, end = 0;
        // run loop from i=0 to i=s1.length, i+=1
        while(end < s1.length){
            // update array2[s2.charCodeAt(i)-97] to 1
            array2[s2.charCodeAt(end)-97] += 1;
            end++;
        }
        end--;
        console.log(s2[start], s2[end], array2);
        // run loop from i=0 to i=s2.length-1, i+=1
        while(end < s2.length){
            if(array1.join("") === array2.join("")) return true;
            array2[s2.charCodeAt(start)-97] -= 1;
            start++;
            end++;
            array2[s2.charCodeAt(end)-97] += 1;
            console.log(s2[start], s2[end], array2)
        }
        // return false
        return false;
    }
}
