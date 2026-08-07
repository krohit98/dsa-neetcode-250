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
        let pq = new MinPriorityQueue(tweet => tweet.time)
        allTweets.forEach(tweet => {
            pq.enqueue(tweet);
            if(pq.size() > 10) pq.dequeue();
        })
        let result = [];
        while(pq.size()){
            result.push(pq.dequeue().tweetId)
        }
        return result.reverse();
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

        let followList = this.followMap[followerId]

        if(followList?.has(followeeId)){
            followList.delete(followeeId)
        }
        if(followList?.size == 0) delete this.followMap[followerId]
    }
}
