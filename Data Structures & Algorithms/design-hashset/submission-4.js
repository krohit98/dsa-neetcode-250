class MyHashSet {
    constructor() {
        this.hashSet = new Array(10000)
    }

    getHash(key){
        return key % this.hashSet.length;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(this.contains(key)) return;
        let hash = this.getHash(key);
        if(this.hashSet[hash]) this.hashSet[hash].push(key);
        else this.hashSet[hash] = [key];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let hash = this.getHash(key);
        if(this.contains(key)){
            this.hashSet[hash] = this.hashSet[hash]?.filter(element => element != key)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let hash = this.getHash(key);
        if(this.hashSet[hash])
            return this.hashSet[hash].length > 0
        else 
            return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
