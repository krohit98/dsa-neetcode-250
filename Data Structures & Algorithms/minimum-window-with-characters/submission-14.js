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

        let start = 0, have = 0, need = Object.keys(tMap).length;

        for(let end=0; end<s.length; end++) {
            if(tMap[s[end]]) {
                freqMap[s[end]]++;
                if(tMap[s[end]] === freqMap[s[end]]) have++;

                while(have === need) {
                    minSub = minSub.length <= (end-start+1) ? minSub : s.substring(start, end+1);
                    if(tMap[s[start]]) {
                        if(freqMap[s[start]] === tMap[s[start]]) {
                            have--;
                        }
                        freqMap[s[start]]--;
                    }
                    start++;
                }
            }
        }
        return minSub.length > s.length ? "" : minSub;
    }
}
