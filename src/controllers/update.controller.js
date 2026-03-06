const Update = require("../models/Update");

exports.createUpdate = async(req,res)=>{

const update = await Update.create({
title:req.body.title,
message:req.body.message,
image:req.body.image
});

res.json(update);
};