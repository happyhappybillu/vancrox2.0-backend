const Trade = require("../models/Trade");
const calculateProfit = require("../utils/profitCalculator");
const User = require("../models/User");

exports.completeTrade = async(req,res)=>{

const {result} = req.body;

const trade = await Trade.findById(req.params.id);

if(result==="profit"){

const calc = calculateProfit(
trade.amount,
trade.returnPercent
);

const investor = await User.findById(trade.investorId);
const trader = await User.findById(trade.traderId);

investor.balance += calc.investorCredit;
trader.earningsBalance += calc.traderEarning;

await investor.save();
await trader.save();

trade.status="profit";

}else{

const investor = await User.findById(trade.investorId);

investor.balance += trade.amount;

await investor.save();

trade.status="loss";

}

await trade.save();

res.json({success:true});
};