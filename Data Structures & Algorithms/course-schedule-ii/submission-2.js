class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let preMap = {};
        for(let [course, pre] of prerequisites) {
            preMap[course] = preMap[course] || [];
            preMap[course].push(pre);
        }

        let result = [];
        let visited = new Set();

        function dfs(course, cycle) {

            if(cycle.has(course)) return false;

            if(visited.has(course)) return true;

            cycle.add(course);

            for(let prerequisite of preMap[course] || []) {
                if(!dfs(prerequisite, cycle)) {
                    return false;
                }
            }
            cycle.delete(course);
            visited.add(course);
            result.push(course);
            return true;
        }

        for(let i=0; i<numCourses; i++) {
            if(!dfs(i, new Set())) return [];
        }

        return result;
    }
}
