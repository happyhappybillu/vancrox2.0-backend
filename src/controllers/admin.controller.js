const User = require("../models/User");
const WithdrawRequest = require("../models/WithdrawRequest");

exports.pending = async(req,res)=>{

const withdraws = await WithdrawRequest.find({
status:"pending"
});

res.json(withdraws);
};