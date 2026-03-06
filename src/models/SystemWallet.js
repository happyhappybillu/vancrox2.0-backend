const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
{
erc20: String,

trc20: String,

bep20: String,

updatedAt: {
type: Date,
default: Date.now,
},
},
{ timestamps: true }
);

module.exports = mongoose.model("SystemWallet", walletSchema);