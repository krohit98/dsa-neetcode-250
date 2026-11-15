class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let edgeMap = {};

        function dfs(n, v2, origin) {
            if(!edgeMap[n]) return false;
            if(edgeMap[n].has(v2)) return true;

            let neighbours = Array.from(edgeMap[n]);
            for(let neighbour of neighbours) {
                if(neighbour == origin) continue;
                if(dfs(neighbour,v2,n)){
                    return true;
                }
            }
            return false;
        }

        for(let i=0; i<edges.length; i++) {
            const [v1, v2] = edges[i];
            if(dfs(v1,v2)) {
                return [v1,v2];
            }
            else {
                edgeMap[v1] = edgeMap[v1] || new Set();
                edgeMap[v1].add(v2);

                edgeMap[v2] = edgeMap[v2] || new Set();
                edgeMap[v2].add(v1);
            }
        }
    }
}
