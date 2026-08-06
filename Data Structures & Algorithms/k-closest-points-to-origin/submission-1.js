class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let pq = new MaxPriorityQueue((point) => point.distance);

        for(let i=0; i<points.length; i++) {
            let [x,y] = points[i];
            let distance = Math.sqrt((x * x) + (y * y));
            pq.enqueue({x, y, distance})
            if(pq.size() > k) pq.dequeue();
        }

        let result = [];

        while(k--){
            let {x,y} = pq.dequeue();
            result.push([x,y]);
        }

        return result;
    }
}
