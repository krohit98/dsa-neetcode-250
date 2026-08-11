class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        let time = 0;
        let enqueueHeap = new MinPriorityQueue(task => task.enqueueTime)
        let processHeap = new MinPriorityQueue(task => task.processTime)

        for(let i=0; i<tasks.length; i++) {
            enqueueHeap.enqueue({
                enqueueTime:tasks[i][0],
                processTime:tasks[i][1],
                index:i
            })
        }

        time = 0;

        let taskOrder = [];

        while(enqueueHeap.size() || processHeap.size()) {

            if(time < enqueueHeap.front()?.enqueueTime) {
                time = enqueueHeap.front()?.enqueueTime
            }

            while(enqueueHeap.front()?.enqueueTime <= time) {
                processHeap.enqueue(enqueueHeap.dequeue());
            }

            let selectedTask = processHeap.dequeue();
            time += selectedTask?.processTime;
            taskOrder.push(selectedTask?.index);
        }

        return taskOrder;
    }
}
