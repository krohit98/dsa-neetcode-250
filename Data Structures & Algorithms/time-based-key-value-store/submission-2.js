class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let keyArray = this.keyStore.get(key);
        if(keyArray) this.keyStore.set(key, [...keyArray, [value,timestamp]])
        else this.keyStore.set(key, [[value,timestamp]]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        console.log(this.keyStore)
        let keyArray = this.keyStore.get(key);
        if(!keyArray || keyArray.length==0) return "";

        let start = 0, end = keyArray.length-1;
        while(start <= end){
            let mid = Math.floor((start+end)/2);
            let [value, midTimestamp] = keyArray[mid];
            if(midTimestamp == timestamp) return value;
            else if(midTimestamp > timestamp) end = mid-1;
            else start = mid+1;
        }
        console.log(end, keyArray[end]);
        return end < 0 ? "" : keyArray[end][0];
    }
}
