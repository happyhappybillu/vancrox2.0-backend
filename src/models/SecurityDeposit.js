const mongoose = require("mongoose");

const securitySchema = new mongoose.Schema(
{
traderId: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
},

amount: Number,

network: String,

screenshot: String,

status: {
type: String,
enum: ["pending", "approved", "rejected"],
default: "pending",
},

createdAt: {
type: Date,
default: Date.now,
},
},
{ timestamps: true }
);

module.exports = mongoose.model("SecurityDeposit", securitySchema);