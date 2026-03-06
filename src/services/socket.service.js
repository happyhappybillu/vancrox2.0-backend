const { Server } = require("socket.io");
const SupportTicket = require("../models/SupportTicket");

let io;

const initSocket = (server) => {

io = new Server(server, {
cors: {
origin: "*"
}
});

io.on("connection", (socket) => {

console.log("User connected:", socket.id);

socket.on("joinTicket", (ticketId) => {
socket.join(ticketId);
});

socket.on("sendMessage", async (data) => {

const { ticketId, sender, message } = data;

const ticket = await SupportTicket.findById(ticketId);

if (!ticket) return;

ticket.messages.push({
sender,
message
});

await ticket.save();

io.to(ticketId).emit("newMessage", {
sender,
message
});

});

socket.on("disconnect", () => {
console.log("User disconnected");
});

});

};

const getIO = () => {
if (!io) {
throw new Error("Socket not initialized");
}
return io;
};

module.exports = { initSocket, getIO };