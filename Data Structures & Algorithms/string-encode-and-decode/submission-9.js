class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for(let i=0;i<strs.length;i++){
            encoded+=String(strs[i].length)+'#'+strs[i];
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let wordLength = '';
        for(let i=0;i<str.length;i++){
            if(str[i] == '#'){
                decoded.push(str.slice(i+1,i+1+Number(wordLength)));
                i+=Number(wordLength);
                wordLength = '';
            }
            else{
                wordLength+=str[i];
            }
        }
        return decoded;
    }
}
