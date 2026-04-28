/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];

        let tempMax = Math.max(curr, curr * maxProd, curr * minProd);
        let tempMin = Math.min(curr, curr * maxProd, curr * minProd);

        maxProd = tempMax;
        minProd = tempMin;

        result = Math.max(result, maxProd);
    }

    return result;
};