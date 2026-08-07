class Twitter {
    constructor() {
        this.tweetMap = {}
        this.followMap = {}
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.time += 1;
        if(this.tweetMap[userId]){
            this.tweetMap[userId].push({tweetId, time:this.time})
        } 
        else this.tweetMap[userId] = [{tweetId, time:this.time}]
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let allTweets = this.tweetMap[userId] ? [...this.tweetMap[userId]] : [];
        let following = this.followMap[userId];
        if(following) {
            Array.from(following).forEach(followed => {
                allTweets.push(...this.tweetMap[followed])
            })
        }
        let pq = new MaxPriorityQueue(tweet => tweet.time)
        allTweets.forEach(tweet => pq.enqueue(tweet))
        let result = [];
        while(pq.size()){
            result.push(pq.dequeue().tweetId)
            if(result.length == 10) break;
        }
        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(followerId == followeeId) return;
        if(this.followMap[followerId]){
            this.followMap[followerId].add(followeeId)
        } 
        else this.followMap[followerId] = new Set([followeeId])
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(followerId == followeeId) return;

        if(this.followMap[followerId]?.has(followeeId)){
            this.followMap[followerId].delete(followeeId)
        }
        if(this.followMap[followerId]?.size == 0) delete this.followMap[followerId]
    }
}
