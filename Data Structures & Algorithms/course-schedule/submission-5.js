class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let indegree = new Array(numCourses).fill(0);
        let preMap = {};

        for(let i=0; i<prerequisites.length; i++) {
            const [course, pre] = prerequisites[i];
            indegree[course]++;
            preMap[pre] = preMap[pre] || [];
            preMap[pre].push(course);
        }

        let q = new Queue();
        for(let i=0; i<numCourses; i++) {
            if(indegree[i] == 0) {
                q.push(i);
            }
        }

        let finished = 0;
        while(q.size()) {
            let pre = q.pop();
            finished++;
            let dependentCourses = preMap[pre];
            if(!dependentCourses) continue;
            for(let j=0; j<dependentCourses.length; j++) {
                indegree[dependentCourses[j]]--;
                if(indegree[dependentCourses[j]] == 0) {
                    q.push(dependentCourses[j]);
                }
            }
        }

        return finished === numCourses;
    }
}
