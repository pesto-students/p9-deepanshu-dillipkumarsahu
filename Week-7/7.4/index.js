const stock_prices = [7, 1, 5, 3, 6, 4];

function maximumProfit(stock_prices) {
  let maxProfit = 0;
  let minPrice = stock_prices[0];
  for (let i = 1; i < stock_prices.length; i++) {
    if (stock_prices[i] < minPrice) {
      minPrice = stock_prices[i];
    } else if (stock_prices[i] - minPrice > maxProfit) {
      maxProfit = stock_prices[i] - minPrice;
    }
  }

  return maxProfit;
}

const res = maximumProfit(stock_prices);
console.log(res);
