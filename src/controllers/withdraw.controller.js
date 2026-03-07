const WithdrawRequest = require("../models/WithdrawRequest");
const User = require("../models/User");

exports.createWithdraw = async(req,res)=>{

const {amount}=req.body;

const user = await User.findById(req.user.id);

if(user.balance < amount){
return res.status(400).json({message:"Insufficient"});
}

user.balance -= amount;

await user.save();

const withdraw = await WithdrawRequest.create({

userId:user._id,
amount,
status:"pending"

});

res.json(withdraw);
};

if(withdraw.status !== "pending"){
return res.status(400).json({
message:"Already processed"
});
}