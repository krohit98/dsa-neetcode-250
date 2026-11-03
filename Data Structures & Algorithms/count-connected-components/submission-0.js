class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let edgeMap = {};

        for(let i=0; i<edges.length; i++) {
            let [v1,v2] = edges[i];

            edgeMap[v1] = edgeMap[v1] || [];
            edgeMap[v1].push(v2);

            edgeMap[v2] = edgeMap[v2] || [];
            edgeMap[v2].push(v1);
        }

        let count = 0;
        let visited = new Set();

        function dfs(node) {
            visited.add(node);
            let neighbours = edgeMap[node] || [];
            for(let i=0; i<neighbours.length; i++) {
                if(!visited.has(neighbours[i])) {
                    dfs(neighbours[i]);
                }
            }
        }

        for(let i=0; i<n; i++) {
            if(!visited.has(i)) {
                dfs(i);
                count++;
            }
        }

        return count;

    }
}
