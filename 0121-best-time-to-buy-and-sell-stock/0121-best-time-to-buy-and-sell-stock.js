/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice = Infinity;
    let maxprice = 0;

    for(let i = 0; i< prices.length; i++){
        if(prices[i] < minprice) {
            minprice = prices[i];
        }
        else{
        let profit = prices[i] - minprice;
        maxprice = Math.max(profit, maxprice);
        }
        
    }
    return maxprice;
};