const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");

const tradeController = require("../controllers/trade.controller");

router.post("/complete/:id", protect, tradeController.completeTrade);

module.exports = router;