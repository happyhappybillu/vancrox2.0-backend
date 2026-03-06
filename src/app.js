const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const investorRoutes = require("./routes/investor.routes");
const traderRoutes = require("./routes/trader.routes");
const tradeRoutes = require("./routes/trade.routes");
const depositRoutes = require("./routes/deposit.routes");
const withdrawRoutes = require("./routes/withdraw.routes");
const supportRoutes = require("./routes/support.routes");
const updateRoutes = require("./routes/update.routes");
const adminRoutes = require("./routes/admin.routes");
const systemRoutes = require("./routes/system.routes");

const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(morgan("combined"));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/investor", investorRoutes);
app.use("/api/trader", traderRoutes);
app.use("/api/trade", tradeRoutes);
app.use("/api/deposit", depositRoutes);
app.use("/api/withdraw", withdrawRoutes);
app.use("/api/support", supportRoutes);
app.use("/api/update", updateRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/system", systemRoutes);

app.use(errorHandler);

module.exports = app;