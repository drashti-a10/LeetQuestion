/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];
    let temp = [];

    function solve(index){
        if(index === nums.length){
            ans.push([...temp]);
            return;
        }

        temp.push(nums[index]);
        solve(index+1);

        temp.pop();
        solve(index+1);
    }

    solve(0);
    return ans;
};