const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");

const withdrawController = require("../controllers/withdraw.controller");

router.post("/create", protect, withdrawController.createWithdraw);

module.exports = router;