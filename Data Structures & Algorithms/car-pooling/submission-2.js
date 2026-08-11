class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        let filled = 0;
        let km = 0;
        let unstartedTrips = new PriorityQueue((a,b)=>a[1]-b[1]);
        let ongoingTrips = new PriorityQueue((a,b)=>a[2]-b[2]);

        for(let i=0;i<trips.length;i++) {
            unstartedTrips.enqueue(trips[i]);
        }

        while(unstartedTrips.size()) {
            let currentTrip = unstartedTrips.dequeue();
            if(km < currentTrip[1]) km = currentTrip[1];
            while(ongoingTrips.size() && km >= ongoingTrips.front()[2]){
                let completedTrip = ongoingTrips.dequeue();
                filled -= completedTrip[0];
            }
            if(filled+currentTrip[0] > capacity) return false;

            filled += currentTrip[0];
            ongoingTrips.enqueue(currentTrip);
        }
        return true;
    }
}
