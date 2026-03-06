const calculateProfit = (investment, returnPercent) => {
  const profit = investment * (returnPercent / 100);

  const fee = profit * 0.10;

  const netProfit = profit - fee;

  const investorCredit = investment + netProfit;

  return {
    profit,
    fee,
    netProfit,
    investorCredit,
    traderEarning: fee,
  };
};

module.exports = calculateProfit;