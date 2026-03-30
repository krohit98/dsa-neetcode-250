class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort nums
        nums.sort();

        // initialize result array
        let result = [];

        let n = nums.length;
        // let added = {};
        // let tripletString = "";

        // loop over nums till < n-2
        for(let i=0;i<n-2;i++){
            if(i > 0 && nums[i] == nums[i-1]) continue;
            // loop over nums till < n-1
            for(let j=i+1;j<n-1;j++){
                if(j>i+1 && nums[j] == nums[j-1]) continue;
                // loop over nums till < n
                for(let k=j+1;k<n;k++){
                    if(k>j+1 && nums[k] == nums[k-1]) continue;
                    // if(i + j + k) == 0
                    if(nums[i]+nums[j]+nums[k] == 0){
                        // tripletString = `${nums[i]}${nums[j]}${nums[k]}`;
                        // console.log(tripletString,"\n")
                        // if(!added[tripletString]){
                            // add to result array
                            result.push([nums[i],nums[j],nums[k]]);
                            // added[tripletString]=1;
                        //}
                    }
                }
            }
        }

        // return result array
        return result;
    }
}
