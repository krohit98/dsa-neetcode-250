class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // if t.length greater than s.length, return ""
        if(t.length > s.length) return "";
        if(s == t) return t;

        // initialize start, count, window, charMap, minWindow
        let start = 0, count = 0, window = "", charMap = {}, minWindow = s;

        // run loop from i = 0 to i < t.length
        for(let i=0; i<t.length; i++){
            // add t[i] to map with count
            charMap[t[i]] ? charMap[t[i]]++ : charMap[t[i]] = 1;
        }

        console.log(charMap);

        // run loop from end = 0 to end < s.length
        for(let end = 0; end < s.length; end++){
            // add s[end] to window
            window += s[end];
            // if s[end] exists in map
            if(charMap.hasOwnProperty(s[end])){
                // increase count
                if(charMap[s[end]] > 0) count++;
                // decrement count of s[end] in map by 1
                charMap[s[end]]--;
            }

            console.log(count, window)

            // run loop while count == t.length
            while(count == t.length){
                // minimize minWindow between minWindow and window
                minWindow = window.length < minWindow.length ? window : minWindow; 
                // remove s[start] from window
                window = window.substring(1);
                // if s[start] exists in map
                if(charMap.hasOwnProperty(s[start])){
                    // decrease count
                    if(charMap[s[start]] >= 0) count--;
                    // increment count of s[start] in map by 1
                    charMap[s[start]]++;
                }
                // increment start by 1
                start++;
            }

        }

        // return result
        if(minWindow == s && start == 0) return "";
        return minWindow;
    }
}
