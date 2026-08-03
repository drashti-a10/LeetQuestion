/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = new Map();

    for(let num of nums2){
        while(stack.length > 0 && stack[stack.length - 1]<num){
            let smaller = stack.pop();
            map.set(smaller, num);
        }
        stack.push(num);
    }

    while(stack.length > 0){
        map.set(stack.pop(), -1);
    }

    let ans = [];
    for(let num of nums1){
        ans.push(map.get(num));
    }

    return ans;
};