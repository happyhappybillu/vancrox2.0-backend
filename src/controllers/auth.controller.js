const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateToken } = require("../config/jwt");
const { generateUID, generateTID } = require("../utils/idGenerator");
const asyncHandler = require("../utils/asyncHandler");

exports.registerInvestor = asyncHandler(async (req, res) => {

const { name, email, password } = req.body;

const exists = await User.findOne({ email });

if (exists) {
return res.status(400).json({ success:false,message:"Email already exists"});
}

const hashed = await bcrypt.hash(password,10);

const user = await User.create({
name,
email,
password:hashed,
role:"investor",
uid:generateUID()
});

res.json({
success:true,
message:"Investor registered",
data:user
});
});


exports.registerTrader = asyncHandler(async (req,res)=>{

const {name,email,password}=req.body;

const exists = await User.findOne({email});

if(exists){
return res.status(400).json({success:false,message:"Email exists"});
}

const hashed = await bcrypt.hash(password,10);

const user = await User.create({
name,
email,
password:hashed,
role:"trader",
tid:generateTID()
});

res.json({
success:true,
message:"Trader registered",
data:user
});
});


exports.login = asyncHandler(async(req,res)=>{

const {email,password}=req.body;

const user = await User.findOne({email});

if(!user){
return res.status(401).json({success:false,message:"Invalid login"});
}

const match = await bcrypt.compare(password,user.password);

if(!match){
return res.status(401).json({success:false,message:"Invalid login"});
}

const token = generateToken({
id:user._id,
role:user.role
});

res.json({
success:true,
token,
user
});
});