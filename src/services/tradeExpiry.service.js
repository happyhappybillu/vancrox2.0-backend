const Trade = require("../models/Trade");
const User = require("../models/User");

const expireTrades = async () => {

const now = new Date();

const trades = await Trade.find({
status: "pending",
createdAt: { $lte: new Date(now - 5 * 60 * 1000) }
});

for (const trade of trades) {

const investor = await User.findById(trade.investorId);

if (investor) {
investor.balance += trade.amount;
await investor.save();
}

trade.status = "expired";
await trade.save();
}

};

module.exports = expireTrades;