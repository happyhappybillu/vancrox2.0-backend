const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
name: {
type: String,
required: true,
},

email: {
type: String,
required: true,
unique: true,
},

password: {
type: String,
required: true,
},

role: {
type: String,
enum: ["investor", "trader"],
required: true,
},

uid: {
type: String,
unique: true,
sparse: true,
},

tid: {
type: String,
unique: true,
sparse: true,
},

balance: {
type: Number,
default: 0,
},

securityBalance: {
type: Number,
default: 0,
},

earningsBalance: {
type: Number,
default: 0,
},

wallets: {
trc20: String,
erc20: String,
bep20: String,
},

status: {
type: String,
default: "active",
},

createdAt: {
type: Date,
default: Date.now,
},
},
{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);