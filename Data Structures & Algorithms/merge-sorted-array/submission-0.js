class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        if(m == 0) {
            for(let i=0;i<n;i++)
            nums1[i] = nums2[i];
        }

        let p1=0; 
        let p2=0;
        let tempArr = [];

        while(p1<m && p2<n){
            if(nums1[p1] < nums2[p2]){
                tempArr.push(nums1[p1++]);
            }
            else{
                tempArr.push(nums2[p2++]);
            }
        }
        while(p1<m){
            tempArr.push(nums1[p1++]);
        }
        while(p2<n){
            tempArr.push(nums2[p2++]);
        }

        for(let i=0;i<(m+n);i++){
            nums1[i] = tempArr[i];
        }
    }
}
