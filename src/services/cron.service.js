const cron = require("node-cron");

const expireTrades = require("./tradeExpiry.service");
const expireDeposits = require("./depositExpiry.service");

const startCronJobs = () => {

cron.schedule("* * * * *", async () => {
await expireTrades();
});

cron.schedule("* * * * *", async () => {
await expireDeposits();
});

};

module.exports = startCronJobs;