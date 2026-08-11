/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  let n = arr.length;
  let mod = 1000000007;

  let nse = findNSE(arr);
  let pse = findPSE(arr);

  let total = 0;

  for(let i=0; i<n; i++){
    let left = i-pse[i];
    let right = nse[i] - i;

    total = (total + left*right*arr[i]) % mod;
  }
  return total;
};

function findNSE(arr){
    let n = arr.length;
    let nse = new Array(n);
    let stack =[];

    for(let i=n-1; i>=0; i--){
        while(stack.length>0 && arr[stack[stack.length - 1]] >= arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
            nse[i] = n;
        } else{
            nse[i]= stack[stack.length - 1];
        }
        stack.push(i);
    }
    return nse;
}


function findPSE(arr){
    let n = arr.length;
    let pse = new Array(n);
    let stack = [];

    for(let i=0; i<n; i++){
        while(stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]){
            stack.pop();
        }

        if(stack.length === 0){
            pse[i] = -1;
        }else {
            pse[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return pse;
}














