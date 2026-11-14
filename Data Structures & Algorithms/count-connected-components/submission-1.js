class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let parent = new Array(n);
        let rank = new Array(n);

        for(let i=0; i<n; i++) {
            parent[i] = i;
            rank[i] = 1;
        }

        function find(node){
            let res = node;

            while(parent[res] != res) {
                parent[res] = parent[parent[res]]; // just for optimisation
                res = parent[res];
            }

            return res;
        }

        function union(n1, n2){
            const [p1, p2] = [find(n1), find(n2)];
            if(p1 === p2) return 0;

            if(rank[p1] > rank[p2]) {
                parent[p2] = p1;
                rank[p1] += rank[p2];
            }
            else {
                parent[p1] = p2;
                rank[p2] += rank[p1];
            }
            return 1;
        }

        let count = n;
        for(let [n1, n2] of edges) {
            count -= union(n1,n2)
        }

        return count;
    }
}
