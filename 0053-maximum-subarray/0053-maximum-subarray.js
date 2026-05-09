/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curSum = 0;
    let maxSum = -Infinity;
    for(let i=0; i<nums.length; i++){
        curSum = curSum + nums[i];
        if(curSum < nums[i])
        {
            curSum = nums[i];
        }

        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
};