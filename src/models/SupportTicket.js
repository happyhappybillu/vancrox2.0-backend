const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema(
{
userId: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
},

messages: [
{
sender: String,
message: String,
time: {
type: Date,
default: Date.now,
},
},
],

status: {
type: String,
default: "open",
},
},
{ timestamps: true }
);

module.exports = mongoose.model("SupportTicket", supportSchema);