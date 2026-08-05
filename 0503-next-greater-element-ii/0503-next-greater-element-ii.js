/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
   
    let nge = new Array(nums.length).fill(-1);
    let stack = [];

    for(let i = 2 * nums.length - 1; i>=0; i--){
        while(stack.length>0 && stack[stack.length - 1] <= nums[i % nums.length]){
            stack.pop();
        }
        if(i < nums.length){
            nge[i] = stack.length === 0? -1:stack[stack.length - 1];
        }

        stack.push(nums[i % nums.length]);
    }
    return nge;
};