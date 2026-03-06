const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

router.post("/register/investor", authController.registerInvestor);
router.post("/register/trader", authController.registerTrader);
router.post("/login", authController.login);

module.exports = router;