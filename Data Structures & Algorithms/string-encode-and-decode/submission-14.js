class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for(let i=0;i<strs.length;i++) {
            encodedString += String(strs[i].length)+"#"+strs[i];
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i=0;
        while(i < str.length) {
            let wordLength = "";
            while(str[i] !== '#'){
                wordLength += str[i];
                i++;
            }

            wordLength = Number(wordLength);

            if(str[i] === '#') {
                if(wordLength || !isNaN(wordLength)) {
                    let word = str.slice(i+1, i+1+wordLength);
                    decoded.push(word);
                }
                else decoded.push("");
                    
                i += wordLength + 1;
            }
            else i++;
        }
        return decoded;
    }
}
