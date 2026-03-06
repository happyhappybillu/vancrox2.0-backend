const mongoose = require("mongoose");

const withdrawSchema = new mongoose.Schema(
{
userId: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
},

amount: Number,

network: String,

walletAddress: String,

purpose: {
type: String,
enum: ["investor", "traderEarnings", "security"],
},

status: {
type: String,
enum: ["pending", "success", "failed"],
default: "pending",
},

createdAt: {
type: Date,
default: Date.now,
},
},
{ timestamps: true }
);

module.exports = mongoose.model("WithdrawRequest", withdrawSchema);