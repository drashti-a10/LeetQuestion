/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let arr = new Array(temperatures.length).fill(0);
    let stack = [];
    
    for(let i=0; i<temperatures.length;i++){
        while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
            let prev = stack.pop();
            arr[prev] = i- prev;
        }
        stack.push(i);
    }
    return arr;
};