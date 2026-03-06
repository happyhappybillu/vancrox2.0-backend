const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema(
{
userId: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
},

network: {
type: String,
enum: ["TRC20", "ERC20", "BEP20"],
},

amount: Number,

uniqueAmount: Number,

walletAddress: String,

status: {
type: String,
enum: ["pending", "success", "expired"],
default: "pending",
},

expiresAt: Date,

createdAt: {
type: Date,
default: Date.now,
},
},
{ timestamps: true }
);

module.exports = mongoose.model("DepositRequest", depositSchema);