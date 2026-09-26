class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let indexMap = {};

        for(let i=0; i<numbers.length; i++) {
            indexMap[numbers[i]] = i;
        }

        for(let i=0; i<numbers.length; i++) {
            let diff = target - numbers[i];
            if(indexMap[diff]) {
                return [i+1, indexMap[diff]+1]
            }
        }
    }
}
