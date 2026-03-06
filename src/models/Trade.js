const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema(
{
investorId: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
},

traderId: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
},

amount: Number,

returnPercent: Number,

status: {
type: String,
enum: ["pending", "active", "profit", "loss", "rejected", "expired"],
default: "pending",
},

createdAt: {
type: Date,
default: Date.now,
},

acceptedAt: Date,

completedAt: Date,
},
{ timestamps: true }
);

module.exports = mongoose.model("Trade", tradeSchema);