const axios = require("axios");
const DepositRequest = require("../models/DepositRequest");
const User = require("../models/User");
const SystemWallet = require("../models/SystemWallet");

const checkDeposits = async () => {

try {

const wallet = await SystemWallet.findOne();

if (!wallet) return;

const deposits = await DepositRequest.find({
status: "pending"
});

for (const dep of deposits) {

let address;

if (dep.network === "TRC20") address = wallet.trc20;
if (dep.network === "ERC20") address = wallet.erc20;
if (dep.network === "BEP20") address = wallet.bep20;

/*
Blockchain API call
Example placeholder
Replace with real explorer API
*/

const response = await axios.get(
`https://api.blockchain.com/address/${address}`
);

const txs = response.data.txs || [];

for (const tx of txs) {

const amount = parseFloat(tx.value);

if (amount === dep.uniqueAmount) {

const user = await User.findById(dep.userId);

user.balance += dep.amount;

await user.save();

dep.status = "success";

await dep.save();

break;

}

}

}

} catch (error) {

console.error("Deposit Detection Error", error);

}

};

module.exports = checkDeposits;