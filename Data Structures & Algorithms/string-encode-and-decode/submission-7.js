class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length <= 0) return "**EMPTY**"
        let encodedArray = [];
        for(let i = 0; i < strs.length; i++){
            let word = strs[i];
            let encodedWord = ''
            for(let char = 0; char < word.length; char++){
                encodedWord += word.charCodeAt(char)+(char < word.length-1 ? '.' : '');
            }
            encodedArray.push(encodedWord);
        }
        return encodedArray.join(",");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str == '**EMPTY**') return [];
        let decodedArray = [];
        let encodedArray = str.split(',');
        for(let i=0; i<encodedArray.length; i++){
            let encodedWord = encodedArray[i];
            console.log("encodedWord", encodedWord)
            if(encodedWord.length > 0){
                let decodedWord = '';
                let encodedChars = encodedWord.split(".");
                console.log("encodedChars", encodedChars)
                for(let j = 0; j<encodedChars.length; j++){
                    let charCode = encodedChars[j];
                    console.log("charCode", charCode)
                    decodedWord += String.fromCharCode(charCode)
                }
                decodedArray.push(decodedWord);
            }
            else{
                decodedArray.push("");
            }
        }
        return decodedArray;
    }
}
