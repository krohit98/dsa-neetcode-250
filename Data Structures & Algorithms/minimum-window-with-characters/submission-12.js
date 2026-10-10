class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

        let minSub = s+s;
        let tMap = {}, freqMap = {};

        for(let i=0; i<t.length; i++) {
            tMap[t[i]] = (tMap[t[i]] || 0) + 1;
            freqMap[t[i]] = 0
        } 

        let start = 0;

        for(let end=0; end<s.length; end++) {
            if(freqMap[s[end]] != undefined) {
                freqMap[s[end]]++;

                while(this.isEqual(tMap, freqMap)) {
                    minSub = minSub.length <= (end-start+1) ? minSub : s.substring(start, end+1);
                    if(freqMap[s[start]] != undefined) freqMap[s[start]]--;
                    start++;
                }
            }
        }
        return minSub.length > s.length ? "" : minSub;
    }

    isEqual(tMap, freqMap) {
        for(let key of Object.keys(tMap)) {
            if(tMap[key] > freqMap[key]) {
                return false;
            }
        }
        return true;
    }
}
