/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length, pivot = -1;

    for(let i = n-2; i>=0; i--){
        if(nums[i] < nums[i+1]){
            pivot = i;
            break;
        }
    }

    if(pivot === -1) {
        reverse(nums, 0, n-1);
        return;
    }

    for(let i = n-1;i>pivot; i--){
        if(nums[i] > nums[pivot]){
            [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
            break;
        }
    }

    reverse(nums, pivot + 1, n - 1);
};

function reverse(arr, start, end){
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}