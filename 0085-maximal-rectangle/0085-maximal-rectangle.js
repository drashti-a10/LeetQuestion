/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    let heights = new Array(m).fill(0);
    let maxArea = 0;

    for(let i=0; i<n; i++){
        for(let j=0; j<m ;j++){
            if(matrix[i][j] === "1"){
                heights[j]++;
            }else{
                heights[j] = 0;
            }
        }

        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    return maxArea;
};

function largestRectangleArea(heights){
    let stack = [];
    let max = 0;

    for(let i=0; i<heights.length; i++){
        while(stack.length>0 && heights[stack[stack.length-1]]>heights[i]){
            let element = stack.pop();
            let nse = i;
            let pse = stack.length === 0?-1: stack[stack.length -1];

            let area = heights[element] * (nse-pse-1);
            max = Math.max(max, area);
        }
        stack.push(i)
    }

    while(stack.length >0){
        let element = stack.pop();
        let nse = heights.length;
        let pse = stack.length===0?-1:stack[stack.length -1];
        let area = heights[element]*(nse-pse-1);
        max = Math.max(max, area);
    }
    return max;
};