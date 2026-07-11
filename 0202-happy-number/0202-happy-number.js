/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   let visited = new Set();

   while(n !== 1) {
    if(visited.has(n)){
        return false;
    }
    visited.add(n);
    n = squareSum(n);
   }
   return true;
};

function squareSum(n) {
    let sum = 0;

    while (n>0){
        let digit = n % 10;
        sum = sum + digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}