const SupportTicket = require("../models/SupportTicket");

exports.sendMessage = async(req,res)=>{

const ticket = await SupportTicket.create({
userId:req.user.id,
messages:[
{
sender:"user",
message:req.body.message
}
]
});

res.json(ticket);
};
exports.resolveTicket = async (req,res)=>{

const ticketId = req.params.id;

await SupportTicket.findByIdAndDelete(ticketId);

res.json({
success:true,
message:"Ticket resolved"
});

};