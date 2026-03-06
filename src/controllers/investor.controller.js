const User = require("../models/User");
const Trade = require("../models/Trade");

exports.dashboard = async(req,res)=>{

const user = await User.findById(req.user.id);

const trades = await Trade.find({
investorId:user._id
});

res.json({
balance:user.balance,
trades
});
};