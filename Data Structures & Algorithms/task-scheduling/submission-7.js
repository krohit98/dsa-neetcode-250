class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let taskFreqArray = new Array(26).fill(0);
        for(let i=0; i<tasks.length; i++) {
            taskFreqArray[tasks[i].charCodeAt(0)-65]++;
        }

        let pq = new MaxPriorityQueue(task => task.freq);

        for(let i=0; i<26; i++) {
            if(taskFreqArray[i] > 0) pq.enqueue({
                task: String.fromCharCode(i+65),
                freq: taskFreqArray[i]
            })
        }

        let pendingQueue = [];
        let pendingTaskCounter = 0;
        let time = 0;

        while(pq.size() || pendingTaskCounter < pendingQueue.length) {
            if(pendingTaskCounter < pendingQueue.length) {
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
                if(activeTask.freq > 1) {
                    activeTask.freq--;
                    pendingQueue.push({
                        ...activeTask,
                        time: time+1+n
                    })
                }
            }

            time++;
        }

        return time;
    }
}
