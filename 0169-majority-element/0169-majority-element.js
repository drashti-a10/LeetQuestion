/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let el;

    for(let i=0; i< nums.length; i++){
        if(count === 0){
            count = 1;
            el = nums[i];
        }
        else if(nums[i] === el){
            count++;
        }else{
            count--;
        }
    }

    let count1 = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === el){
            count1++;
        }
    }

    if(count1 > nums.length/2){
        return el;
    }
    return -1;
};