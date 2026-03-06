require("dotenv").config();

const http = require("http");

const app = require("./src/app");
const connectDB = require("./src/config/db");

const startCronJobs = require("./src/services/cron.service");
const startDepositWatcher = require("./src/services/depositWatcher.service");

const { initSocket } = require("./src/services/socket.service");

const PORT = process.env.PORT || 5000;

// Root route (health check)
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "VANCROX Backend Running 🚀",
  });
});

// connect database
connectDB();

// start background services
startCronJobs();
startDepositWatcher();

const server = http.createServer(app);

// socket initialize
initSocket(server);

// start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});