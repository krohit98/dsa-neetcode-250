class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        /* 
        Create a freq array of 26 elements where index represents the character
        and value represents the frequency
        */
        let taskFreqArray = new Array(26).fill(0);
        for(let i=0; i<tasks.length; i++) {
            taskFreqArray[tasks[i].charCodeAt(0)-65]++;
        }

        /*
        Use the freq array created above to create a max priority queue or a max heap
        */
        let pq = new MaxPriorityQueue(task => task.freq);

        for(let i=0; i<26; i++) {
            if(taskFreqArray[i] > 0) pq.enqueue({
                task: String.fromCharCode(i+65),
                freq: taskFreqArray[i]
            })
        }

        /*
        Use a while loop to represent one CPU cycle - 
            1. Move cooled-down tasks back into the priority queue.
            2. Execute the highest-frequency available task.
            3. If it has remaining occurrences, put it into cooldown.
        */
        let pendingQueue = [];
        // a pending task counter that points to the first task in the pending queue
        // can be used in place of removing items from the queue as that is an 
        // expensive (O(n)) operation.
        let pendingTaskCounter = 0;
        let time = 0;

        while(pq.size() || pendingTaskCounter < pendingQueue.length) {
            if(pendingTaskCounter < pendingQueue.length) {
                // only the first task in the pending queue needs to checked
                // as that task would be the first to cool down
                let pendingTask = pendingQueue[pendingTaskCounter];
                if(pendingTask.time == time) {
                    pq.enqueue({
                        task: pendingTask.task,
                        freq: pendingTask.freq
                    })
                    pendingTaskCounter++;
                }
            }

            if(pq.size()) {
                let activeTask = pq.dequeue();
                // decrement the frequency and move the task to pending queue to
                // let it cool down before getting scheduled again
                if(activeTask.freq > 1) {
                    activeTask.freq--;
                    pendingQueue.push({
                        ...activeTask,
                        time: time+1+n
                    })
                }
            }

            // increment the global time counter on every iteration
            time++;
        }

        // the global time counter represents the min number of CPU cycles it took to 
        // schedule all the tasks
        return time;
    }
}
