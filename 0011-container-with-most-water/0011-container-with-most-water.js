/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let amount = 0;
    while(left<right){
       let width = right-left;
       let h = Math.min(height[left],height[right])
       area = width * h
       amount = Math.max(amount , area);
       if(height[left]<height[right]){
        left ++;
       }
        else {
            right--;
        }
      
    }
     return amount;
};