/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    let left_array = new Array(n);
    let right_array = new Array(n);
    let water = 0;

    left_array[0] = height[0];
    for(let i = 1; i<n; i++){
        left_array[i]= Math.max(left_array[i - 1] , height[i]);
    }

    right_array[n-1] = height[n-1];
    for(let i = n-2; i>=0; i--){
        right_array[i] = Math.max(right_array[i+1], height[i]);
    }

    for(let i = 0; i<n; i++){
        water+=Math.min(left_array[i], right_array[i]) - height[i];
    }
    return water;
};