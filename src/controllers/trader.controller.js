const User = require("../models/User");
const Trade = require("../models/Trade");

exports.dashboard = async(req,res)=>{

const trader = await User.findById(req.user.id);

const trades = await Trade.find({
traderId:trader._id
});

res.json({
security:trader.securityBalance,
earnings:trader.earningsBalance,
trades
});
};