class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let pq = new MinPriorityQueue((point) => point.distance);

        for(let i=0; i<points.length; i++) {
            let [x,y] = points[i];
            let distance = Math.sqrt(Math.pow((x-0),2) + Math.pow((y-0),2));
            pq.enqueue({x, y, distance})
        }

        let result = [];

        while(k--){
            let front = pq.dequeue();
            result.push([front.x,front.y]);
        }

        return result;
    }
}
