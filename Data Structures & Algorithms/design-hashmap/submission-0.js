class MyHashMap {
    constructor() {
        this.hashMap = new Array(10000);
    }

    getHash(key){
        return key % this.hashMap.length;
    }

    find(hash, key){
        return this.hashMap[hash].findIndex(element => element[0] == key);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let hash = this.getHash(key);
        if(this.hashMap[hash]){
            let hashBucketIdx = this.find(hash, key);
            if(hashBucketIdx > -1){
                this.hashMap[hash][hashBucketIdx][1] = value;
            }
            else{
                this.hashMap[hash].push([key,value]);
            }
        }
        else{
            this.hashMap[hash] = [[key,value]];
        }
        console.log(this.hashMap);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let hash = this.getHash(key);
        if(this.hashMap[hash]){
            let hashBucketIdx = this.find(hash, key);
            if(hashBucketIdx > -1){
                return this.hashMap[hash][hashBucketIdx][1];
            }
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let hash = this.getHash(key);
        if(this.hashMap[hash]){
            this.hashMap[hash] = this.hashMap[hash].filter(element => element[0] != key)
        }
        console.log(this.hashMap);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
