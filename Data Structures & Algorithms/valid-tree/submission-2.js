class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        if(edges.length !== n-1) return false;

        let reachability = new Array(n).fill(false);
        let edgeMap = {};

        for(let i=0; i<edges.length; i++) {
            let [v1, v2] = edges[i];
            edgeMap[v1] = edgeMap[v1] || [];
            edgeMap[v1].push(v2);

            edgeMap[v2] = edgeMap[v2] || [];
            edgeMap[v2].push(v1);
        }

        let visited = new Set();
        function dfs(node, parent) {
            if(visited.has(node)) return false;

            reachability[node] = true;
            visited.add(node);

            let neighbours = edgeMap[node] || [];
            for(let i=0; i<neighbours.length; i++) {
                let neighbour = neighbours[i];
                if(neighbour === parent) continue;
                if(!dfs(neighbour, node)) return false;
            }
            return true;
        }

        if(!dfs(0)) return false;

        for(let i=0; i<n; i++) {
            if(!reachability[i]) return false;
        }

        return true;
    }
}
