class Solution {
    public int maxProfit(int[] prices) {
        int minstock = prices[0];
        int maxprofit = 0;
        for(int i=1; i<prices.length; i++){
            minstock = Math.min(minstock, prices[i]);
            int profit = prices[i]-minstock;
            maxprofit = Math.max(maxprofit, profit);
        }
        return maxprofit;
    }
}