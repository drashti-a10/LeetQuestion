/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxInd = 0;
    for(let i=0; i< nums.length ; i++){
        if(i > maxInd){
        return false;
        }
        maxInd = Math.max(maxInd, nums[i] + i);
    }
    return true;
};