/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min_price = prices[0];
  let profit = 0;
    
  for(let i = 0; i < prices.length; i++){
    let max_price_sell_to_today = prices[i] - min_price;
    if(prices[i] < min_price){
      min_price = prices[i];  
    }  
    if(max_price_sell_to_today > profit){
     profit = max_price_sell_to_today;     
    }  
  }
  return profit;  
};