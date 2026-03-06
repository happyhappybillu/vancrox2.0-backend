const DepositRequest = require("../models/DepositRequest");
const generateUniqueAmount = require("../utils/uniqueAmount");

exports.createDeposit = async(req,res)=>{

const {amount,network}=req.body;

const uniqueAmount = generateUniqueAmount(amount);

const deposit = await DepositRequest.create({

userId:req.user.id,
network,
amount,
uniqueAmount,
expiresAt:Date.now()+600000

});

res.json(deposit);
};