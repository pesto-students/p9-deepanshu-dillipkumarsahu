const stock_prices = [7, 1, 5, 3, 6, 4];

function calProfit(prices, buying_day, selling_day) {
  if (buying_day >= 0 && selling_day <= prices.length - 1) {
    if (buying_day <= selling_day) {
      //   console.log(prices[buying_day], prices[selling_day]);
      return prices[buying_day] - prices[selling_day];
    } else return "Buying day should be less than Selling day";
  } else
    return "Buying day should >= 0 and Selling day should < " + prices.length;
}

const res = calProfit(stock_prices, 1, 5);
console.log(res);
