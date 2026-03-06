const SystemWallet = require("../models/SystemWallet");

exports.updateWallets = async(req,res)=>{

const {erc20,trc20,bep20}=req.body;

const wallet = await SystemWallet.findOneAndUpdate(
{},
{erc20,trc20,bep20},
{upsert:true,new:true}
);

res.json(wallet);
};