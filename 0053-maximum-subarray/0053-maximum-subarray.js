/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let cursum = nums[0];
    let maxsum = nums[0];
    for(let i=1; i<nums.length; i++){
        cursum = Math.max(nums[i], cursum + nums[i]);
        maxsum = Math.max(maxsum, cursum)
    }
    return maxsum;
};