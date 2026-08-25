func subsets(nums []int) [][]int {
    var result [][]int
    var subset []int

    var backtrack func(int)
    backtrack = func(start int) {
        result = append(result, append([]int(nil), subset...))

        for i := start; i < len(nums); i++ {
            subset = append(subset, nums[i])
            backtrack(i + 1)

            subset = subset[:len(subset)-1]
        }
    }

    backtrack(0)
    return result
}