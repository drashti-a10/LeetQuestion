/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let max = 0;

    for(let i=0; i<heights.length; i++){
        while(stack.length>0 && heights[stack[stack.length - 1]]>heights[i]){
            let element = stack.pop();
            let nge = i;
            let pge = stack.length === 0? -1 : stack[stack.length - 1];
            let area = heights[element] * (nge - pge -1);
            max = Math.max(max, area);
        }
        stack.push(i);
    }

    while(stack.length>0){
        let element = stack.pop();
        let nse = heights.length;
        let pse = stack.length === 0?-1:stack[stack.length -1];

        let area = heights[element]* (nse - pse -1);
        max = Math.max(max, area);
    }
    return max;
};