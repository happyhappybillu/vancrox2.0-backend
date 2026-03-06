const mongoose = require("mongoose");

const verificationSchema = new mongoose.Schema(
{
traderId: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
},

file: String,

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

module.exports = mongoose.model("TraderVerification", verificationSchema);