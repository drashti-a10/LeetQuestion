/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   let leftProduct = 1;
   let rightProduct = 1;
   let ans = -Infinity;
   for(let i = 0; i<nums.length; i++){
    leftProduct = leftProduct == 0? 1: leftProduct;
    rightProduct = rightProduct == 0? 1: rightProduct;

    leftProduct *= nums[i];
    rightProduct *= nums[nums.length - 1 - i];
    ans = Math.max(ans, Math.max(leftProduct, rightProduct));
   } 
   return ans;
};