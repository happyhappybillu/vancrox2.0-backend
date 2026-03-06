const DepositRequest = require("../models/DepositRequest");

const expireDeposits = async () => {

const now = new Date();

const deposits = await DepositRequest.find({
status: "pending",
expiresAt: { $lte: now }
});

for (const dep of deposits) {

dep.status = "expired";

await dep.save();

}

};

module.exports = expireDeposits;