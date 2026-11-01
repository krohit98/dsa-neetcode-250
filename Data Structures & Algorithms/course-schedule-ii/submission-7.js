class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let preMap = {};
        let indegree = new Array(numCourses).fill(0);

        for(let i=0; i<prerequisites.length; i++){
            let [course, pre] = prerequisites[i];
            preMap[pre] = preMap[pre] || [];
            preMap[pre].push(course);

            indegree[course]++;
        }

        let q = new Queue();
        for(let i=0; i<numCourses; i++) {
            if(indegree[i] == 0) q.push(i);
        }

        let result = [];

        while(q.size()){
            let pre = q.pop();
            result.push(pre);

            for(let i=0; i<preMap[pre]?.length; i++) {
                let course = preMap[pre][i];
                indegree[course]--;
                if(indegree[course] == 0) q.push(course);
            }
        }

        return result.length == numCourses ? result : [];
    }
}
