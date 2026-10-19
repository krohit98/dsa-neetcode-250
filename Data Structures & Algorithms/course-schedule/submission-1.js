class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let prerequisiteMap = {};

        for(let i=0; i<prerequisites.length; i++) {
            prerequisiteMap[prerequisites[i][0]] = prerequisiteMap[prerequisites[i][0]] || []
            prerequisiteMap[prerequisites[i][0]].push(prerequisites[i][1]);
        }

        function dfs(courseSet, course) {
            const prerequisites = prerequisiteMap[course];
            if(!prerequisites || prerequisites.length == 0 || prerequisites == 'visited') return true;
            for(let i=0;i<prerequisites.length;i++) {
                const prerequisite = prerequisites[i];
                
                if(courseSet.has(prerequisite)){
                    return false;
                }
                courseSet.add(course)
                if(!dfs(courseSet, prerequisite)) {
                    return false;
                }
                courseSet.delete(course)
            }
            prerequisiteMap[course] = 'visited';
            return true;
        }

        for(let i=0; i<prerequisites.length; i++) {
            if(!dfs(new Set(), prerequisites[i][0])) {
                return false;
            }
        }

        return true;
    }
}
