const cron = require("node-cron");

const checkDeposits = require("./blockchain.service");

const startDepositWatcher = () => {

cron.schedule("*/2 * * * *", async () => {

await checkDeposits();

});

};

module.exports = startDepositWatcher;