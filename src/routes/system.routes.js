const express = require("express");
const router = express.Router();

const systemController = require("../controllers/system.controller");

router.post("/wallets", systemController.updateWallets);

module.exports = router;