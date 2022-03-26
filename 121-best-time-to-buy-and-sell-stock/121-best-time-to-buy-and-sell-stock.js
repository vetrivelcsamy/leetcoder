/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min_price = Math.max(...prices);
  let max_profit = 0;
   
   for(let price of prices){
     let max_profit_sell_for_today = price - min_price; 
     max_profit =  Math.max(max_profit, max_profit_sell_for_today);
     min_price = Math.min(min_price, price); 
   }
   return max_profit; 
};