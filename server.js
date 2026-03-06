require("dotenv").config();

const http = require("http");

const app = require("./src/app");
const connectDB = require("./src/config/db");

const startCronJobs = require("./src/services/cron.service");
const startDepositWatcher = require("./src/services/depositWatcher.service");

const { initSocket } = require("./src/services/socket.service");

const PORT = process.env.PORT || 5000;

connectDB();

startCronJobs();
startDepositWatcher();

const server = http.createServer(app);

initSocket(server);

server.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});