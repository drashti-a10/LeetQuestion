/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let result = new Array(n).fill(1);
    let left =1;
    let right = 1;
    for(let i =0; i< nums.length; i++){
        result[i]= left;
        left = left * nums[i];
    }
    for(let i = n-1; i>=0; i--){
        result[i] = result[i] * right;
        right = right*nums[i];
    }
    return result;
};