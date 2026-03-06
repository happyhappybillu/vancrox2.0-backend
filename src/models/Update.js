const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema(
{
title: String,

message: String,

image: String,

createdAt: {
type: Date,
default: Date.now,
},
},
{ timestamps: true }
);

module.exports = mongoose.model("Update", updateSchema);