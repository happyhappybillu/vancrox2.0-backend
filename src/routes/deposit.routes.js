const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");

const depositController = require("../controllers/deposit.controller");

router.post("/create", protect, depositController.createDeposit);

module.exports = router;